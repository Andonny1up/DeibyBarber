import styled from "styled-components";
import Container from "../../components/Container";
import Fondo from "../../assets/images/fondo.jpg"
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainButton from '../../components/MainButton';

const StyledSection = styled.section`
    background-color: ${props => props.theme.background[20]};
    background-image: url(${Fondo});
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
    background-attachment: fixed;
    padding: 3rem 0;
    min-height: 500px;

    display: flex;
    justify-content: center;
    align-items: center;
`;
const StyledContainer = styled(Container)`
    max-width: 800px;
`;
const StyledH2 = styled.h2`
    text-transform: uppercase;
    font-weight: 700;
`;
const StyledP = styled.p`
    color: ${props => props.theme.text[30]};
`;

const InfoSection = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <StyledH2>¿Estas Listo para hacer tu reserva?</StyledH2>
                <StyledP >
                Haz tu reserva hoy mismo y descubre por qué Deiby Barber es el destino preferido para aquellos que buscan lucir y sentirse increíbles.
                Atención Solo con reserva de cita previa.
                </StyledP>
                <MainButton href='https://wa.me/59169404756?text=¡Hola!.%20Quiero%20Agendar%20una%20cita.' target="_blank">
                    <FontAwesomeIcon icon={faWhatsapp} style={{fontSize: "1.5rem"}} />
                    Agendar cita
                </MainButton>
            </StyledContainer>
        </StyledSection>
    );
}

export default InfoSection;