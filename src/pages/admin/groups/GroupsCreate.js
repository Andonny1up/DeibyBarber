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

const GroupsCreate = () => {
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('El nombre de usuario es requerido'),
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
                name: values.name,
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
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                <Card>
                
                <Form>
                    <InputText name="name" label="Nombre De Grupo" type="text" />
                    <MainButton type="submit">Crear Grupo</MainButton>
                </Form>
                </Card>
                </Formik>
            </Container>
        </section>
    )
}

export default GroupsCreate