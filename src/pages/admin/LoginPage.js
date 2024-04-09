import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import PublicHeader from "../public/PublicHeader";
import Container from '../../components/Container';
import MainButton from '../../components/MainButton';
import InputText from '../../components/InputText';
import Title2 from '../../components/Title2';

const Section = styled.section`
  margin-top: 6rem;
`;
const Card = styled.div`
  background-color: ${props => props.theme.background[20]};
  max-width: 520px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(255,255,255,0.1);
`;
const StyledTitle = styled(Title2)`
  text-align: end;
  color: ${props => props.theme.primary[60]}
`;

const LoginPage = () => {
  return (
    <div>
      <PublicHeader/>
      <Section>
        <Container>
          <Formik
            initialValues={{username: '',password: ''}}
            validationSchema={Yup.object({
              username: Yup.string().required('Requerido'),
              password: Yup.string().required('Requerido')
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            <Card>
              <Form>
                <StyledTitle>Iniciar sesion</StyledTitle>
                <InputText name="username" label="Usuario" type="text" />
                <InputText name="password" label="Contraseña" type="password" />
                <MainButton type="submit">Iniciar sesión</MainButton>
              </Form>
            </Card>
          </Formik>
        </Container>
      </Section>
    </div>
    
  );
}

export default LoginPage;