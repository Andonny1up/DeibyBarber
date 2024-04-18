import ContainerTop from "../../../components/ContainerTop"
import Container from "../../../components/Container"
import TitleIconPage from "../../../components/TitleIconPage"
import Card from "../../../components/Card"
import InputText from "../../../components/InputText"
import ImageUpload from "../../../components/ImageUpload"
import ToggleSwitch from "../../../components/ToggleSwitch"
import MainButton from "../../../components/MainButton"
import { useState, useEffect } from "react"
import {Formik, Form} from 'formik';
import * as Yup from "yup"
import { useParams ,useNavigate } from "react-router-dom"
import { checkAuth } from "../../../services/authService"
import axios from "axios"
import SelectApi from "../../../components/Select"

const UsersEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const pass = await checkAuth();
                if (!pass) {
                    navigate('/login');
                    return;
                }
                const response = await axios.get(`http://localhost:8000/api/users/${id}/`,{
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`
                    }
                });
                setUser(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getUser();
    }, [id, navigate]);

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('El nombre de usuario es requerido'),
        firstName: Yup.string().required('El nombre es requerido'),
        lastName: Yup.string().required('El apellido es requerido'),
        email: Yup.string().email('Correo electrónico inválido').required('El correo electrónico es requerido'),
        phone: Yup.string().required('El teléfono es requerido'),
    });

    
    const handleSubmit = (values, { setSubmitting }) => {
        try {
            const pass = checkAuth();
            if (!pass) {
                navigate('/login');
                return;
            }
            const formData = new FormData();
            formData.append('username', values.username);
            formData.append('first_name', values.firstName);
            formData.append('last_name', values.lastName);
            formData.append('email', values.email);
            formData.append('phone', values.phone);
            formData.append('is_active', values.isActive);
            if (values.groupId){
                formData.append('groups',values.groupId);
            }
            if(values.userProfile){
                formData.append('profile_picture', values.userProfile);
            }
            if (values.birthdate) {
                formData.append('birthdate', values.birthdate);
            }
            console.log(formData);
            const response = axios.patch(`http://localhost:8000/api/users/${id}/`, formData,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                },

            });
            console.log(response);
            

            setSubmitting(false);
            navigate('/admin/users');

        } catch (error) {
            console.log(error);
            setSubmitting(false);
        }
    };
    if (!user) {
        return <div>Cargando...</div>; // Puedes renderizar un componente de carga aquí
    }

    return (
        <section>
            <ContainerTop>
                <TitleIconPage title="Editar Usuario" icon="person"/>
            </ContainerTop>
            <Container>
                <Formik
                    initialValues={{
                        userProfile: null,
                        username: user.username ? user.username : '',
                        firstName: user.first_name ? user.first_name :'',
                        lastName: user.last_name ? user.last_name :'',
                        groupId:user.groups.length > 0 ? user.groups[0].id :'',
                        email: user.email ? user.email :'',
                        phone: user.phone ? user.phone :'',
                        birthdate: user.birthdate ? user.birthdate :'',
                        isActive: user.is_active,

                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                <Card>
                
                <Form>
                    {user && (
                        <>
                            <ImageUpload name="userProfile" label={'Foto de Perfil'} initialImage={user.profile_picture ? user.profile_picture : null}/>
                            <InputText name="username" label="Nombre De Usuario" type="text"/>
                            <InputText name="firstName" label="Nombres" type="text" value={user.first_name} />
                            <InputText name="lastName" label="Apellidos" type="text" value={user.last_name} />
                            <SelectApi
                                name="groupId"
                                label="Grupo"
                                apiURL="http://localhost:8000/api/groups/"
                                transformData={data => data.map(group => ({ value: group.id, label: group.name }))}
                            />
                            <InputText name="email" label="Correo Electrónico" type="email" value={user.email} />
                            <InputText name="phone" label="Teléfono" type="text" value={user.phone} />
                            <InputText name="birthdate" label="Fecha de Nacimiento" type="date" value={user.birthdate} />
                            <ToggleSwitch name="isActive" label="Activo"/>
                            <MainButton type="submit">Actualizar Usuario</MainButton>
                        </>
                    )}
                </Form>
                </Card>
                </Formik>
            </Container>
        </section>
    )
}

export default UsersEdit