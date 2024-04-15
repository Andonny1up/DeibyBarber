import ContainerTop from "../../../components/ContainerTop"
import Container from "../../../components/Container"
import TitleIconPage from "../../../components/TitleIconPage"
import Card from "../../../components/Card"
import InputText from "../../../components/InputText"
import MainButton from "../../../components/MainButton"
import {Formik, Form} from 'formik';
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"
import { checkAuth } from "../../../services/authService"
import axios from "axios"

const UsersCreate = () => {
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('El nombre de usuario es requerido'),
        firstName: Yup.string().required('El nombre es requerido'),
        lastName: Yup.string().required('El apellido es requerido'),
        email: Yup.string().email('Correo electrónico inválido').required('El correo electrónico es requerido'),
        phone: Yup.string().required('El teléfono es requerido'),
        password: Yup.string().required('La contraseña es requerida')            
            .matches(/(?=.*[0-9])/, 'La contraseña debe contener al menos un número')
            .matches(/(?=.*[a-zA-Z])/, 'La contraseña debe contener al menos una letra')
            .min(8, 'La contraseña debe tener al menos 8 caracteres'),
        confirmPassword: Yup.string().required('La confirmación de contraseña es requerida')
            .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
    });
    const navigate = useNavigate();
    
    const handleSubmit = (values, { setSubmitting }) => {
        try {
            const pass = checkAuth();
            if (!pass) {
                navigate('/login');
                return;
            }
            const data = {
                username: values.username,
                first_name: values.firstName,
                last_name: values.lastName,
                email: values.email,
                phone: values.phone,
                password: values.password
            }
            if (values.birthdate) {
                data.birthdate = values.birthdate;
            }
            console.log(data);

            const response = axios.post('http://localhost:8000/api/users/', data,{
                headers: {
                    'Content-Type': 'application/json',
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

    return (
        <section>
            <ContainerTop>
                <TitleIconPage title="Nuevo Usuario" icon="person"/>
            </ContainerTop>
            <Container>
                <Formik
                    initialValues={{
                        username: '',
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        birthdate: '',
                        password: '',
                        confirmPassword: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                <Card>
                
                <Form>
                    <InputText name="username" label="Nombre De Usuario" type="text" />
                    <InputText name="firstName" label="Nombres" type="text" />
                    <InputText name="lastName" label="Apellidos" type="text" />
                    <InputText name="email" label="Correo Electrónico" type="email" />
                    <InputText name="phone" label="Teléfono" type="text" />
                    <InputText name="birthdate" label="Fecha de Nacimiento" type="date" />
                    <InputText name="password" label="Contraseña" type="password" />
                    <InputText name="confirmPassword" label="Confirmar Contraseña" type="password" />
                    <MainButton type="submit">Crear Usuario</MainButton>
                </Form>
                </Card>
                </Formik>
            </Container>
        </section>
    )
}

export default UsersCreate