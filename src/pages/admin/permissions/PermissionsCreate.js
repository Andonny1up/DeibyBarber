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
import SelectApi from "../../../components/Select"

const PermissionsCreate = () => {
    const validationSchema = Yup.object().shape({
        contentTypeId: Yup.string().required('La tabla es requerida'),
        name: Yup.string().required('El nombre es requerido'),
        codeName: Yup.string().required('El codigo es requerido')
        .test('no-space', 'El código no puede contener espacios', value => !/\s/.test(value))
        ,
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
                content_type: values.contentTypeId,
                name: values.name,
                codename: values.codeName,
            }
            console.log(data);

            const response = axios.post('http://localhost:8000/api/permissions/', data,{
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                },

            });
            console.log(response);
            setSubmitting(false);
            navigate('/admin/permissions');

        } catch (error) {
            console.log(error);
            setSubmitting(false);
        }
    };

    return (
        <section>
            <ContainerTop>
                <TitleIconPage title="Nuevo Permiso" icon="vpn_key"/>
            </ContainerTop>
            <Container>
                <Formik
                    initialValues={{
                        contentTypeId: '',
                        name: '',
                        codeName: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                <Card>
                
                <Form>
                    <SelectApi
                        name="contentTypeId"
                        label="Tabla"
                        apiURL="http://localhost:8000/api/contenttypes/"
                        transformData={data => data.map(contentType => ({ value: contentType.id, label: contentType.model }))}
                    />
                    <InputText name="name" label="Nombre" type="text" />
                    <InputText name="codeName" label="Codigo" type="text" />
                    <MainButton type="submit">Crear Grupo</MainButton>
                </Form>
                </Card>
                </Formik>
            </Container>
        </section>
    )
}

export default PermissionsCreate