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
import CheckboxGroup from "../../../components/CheckboxGroup"
import axios from "axios"

const PermissionsCreate = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('El nombre es requerido'),
    });
    const navigate = useNavigate();
    
    const handleSubmit = (values, { setSubmitting }) => {
        try {
            const pass = checkAuth();
            if (!pass) {
                navigate('/login');
                return;
            }
            console.log(values);
            const data = {
                name: values.name,
                permissions: Object.keys(values.permissions).filter(key => values.permissions[key]),
            }
            console.log(data);

            const response = axios.post('http://localhost:8000/api/groups/', data,{
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                },

            });
            console.log(response);
            setSubmitting(false);
            navigate('/admin/groups');

        } catch (error) {
            console.log(error);
            setSubmitting(false);
        }
    };

    return (
        <section>
            <ContainerTop>
                <TitleIconPage title="Nuevo Grupo" icon="group"/>
            </ContainerTop>
            <Container>
                <Formik
                    initialValues={{
                        name: '',
                        permissions: [],
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                <Card>
                
                <Form>
                    <InputText name="name" label="Nombre De Grupo" type="text" />
                    <CheckboxGroup
                    name="permissions"
                    label="Permisos"
                    apiURL="http://localhost:8000/api/all-permissions/"
                    transformData={data => data.map(permission => ({ value: permission.id, label: permission.name }))}
                    />
                    <MainButton type="submit">Crear Grupo</MainButton>
                </Form>
                </Card>
                </Formik>
            </Container>
        </section>
    )
}

export default PermissionsCreate