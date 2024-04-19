import React, { useEffect, useState } from "react"
import ContainerTop from "../../../components/ContainerTop"
import Container from "../../../components/Container"
import TitleIconPage from "../../../components/TitleIconPage"
import Card from "../../../components/Card"
import InputText from "../../../components/InputText"
import MainButton from "../../../components/MainButton"
import {Formik, Form} from 'formik';
import * as Yup from "yup"
import { useParams, useNavigate } from "react-router-dom"
import { checkAuth } from "../../../services/authService"
import SelectApi from "../../../components/Select"
import axios from "axios"

const PermissionsEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);

    const validationSchema = Yup.object().shape({
        contentTypeId: Yup.string().required('La tabla es requerida'),
        name: Yup.string().required('El nombre es requerido'),
        codeName: Yup.string().required('El codigo es requerido')
        .test('no-space', 'El código no puede contener espacios', value => !/\s/.test(value))
        ,
    });

    useEffect(() => {
        const getItem = async () => {
            try {
                const pass = await checkAuth();
                if (!pass) {
                    navigate('/login');
                    return;
                }
                const response = await axios.get(`http://localhost:8000/api/permissions/${id}/`,{
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`
                    }
                });
                setItem(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getItem();
    }, [id, navigate]);

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

            const response = axios.put(`http://localhost:8000/api/permissions/${id}/`, data,{
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
    if (!item) {
        return <div>Cargando...</div>; // Puedes renderizar un componente de carga aquí
    }

    return (
        <section>
            <ContainerTop>
                <TitleIconPage title="Nuevo Grupo" icon="group"/>
            </ContainerTop>
            <Container>
                <Formik
                    initialValues={{
                        contentTypeId: item ? item.content_type :'',
                        name: item ? item.name :'',
                        codeName: item ? item.codename :'',
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

export default PermissionsEdit