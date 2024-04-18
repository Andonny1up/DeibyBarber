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
import CheckboxGroup from "../../../components/CheckboxGroup"
import axios from "axios"

const GroupsEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('El nombre es requerido'),
    });

    useEffect(() => {
        const getItem = async () => {
            try {
                const pass = await checkAuth();
                if (!pass) {
                    navigate('/login');
                    return;
                }
                const response = await axios.get(`http://localhost:8000/api/groups/${id}/`,{
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
                name: values.name,
                permissions: Object.keys(values.permissions).filter(key => values.permissions[key]),
            }
            console.log(data);

            const response = axios.put(`http://localhost:8000/api/groups/${id}/`, data,{
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
                        name: item ? item.name :'',
                        permissions: item ? item.permissions.reduce((obj, permissionId) => {
                            obj[permissionId] = true;
                            return obj;
                          }, {}) : {},
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

export default GroupsEdit