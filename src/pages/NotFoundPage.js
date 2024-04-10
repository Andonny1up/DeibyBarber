import styled from 'styled-components';
import Container from '../components/Container';
import MainButton from '../components/MainButton';

const Styled404 = styled.div`
    margin-top: 5rem;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: 10rem;
    color: ${props => props.theme.primary[60]};
    text-align: center;
`;
const StyledError = styled.h1`
    color: ${props => props.theme.text[20]};
    padding: 0.5rem;
    text-align: center;
`;
const StyledCenter = styled.div`
    display: flex;
    justify-content: center;
`;

const NotFoundPage = () => {
    return (
      <Container>
        <Styled404>
            404
        </Styled404>
        <StyledError>Página no encontrada</StyledError>
        <StyledCenter>
            <MainButton href="/">Volver al inicio</MainButton>
        </StyledCenter>
      </Container>
    );
  };
  
  export default NotFoundPage;