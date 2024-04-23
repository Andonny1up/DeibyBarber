import styled from "styled-components";
import Container from "../../components/Container";
import Fondo from "../../assets/images/fondo.jpg"

const StyledSection = styled.section`
    background-color: ${props => props.theme.background[20]};
    background-image: url(${Fondo});
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
    background-attachment: fixed;
    padding: 3rem 0;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;
const StyledContainer = styled(Container)`

`;

const InfoSection = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <h2>¿Listo para un corte de cabello que se adapte perfectamente a tu estilo y personalidad?</h2>
                <p>
                    Quiero brindarte una experiencia única y personalizada
                    <br/>
                    Mientras te relajas en la silla, puedes disfrutar de tus videojuegos, películas o series favoritas, ¡porque aquí la diversión y el estilo van de la mano!
                </p>
            </StyledContainer>
        </StyledSection>
    );
}

export default InfoSection;