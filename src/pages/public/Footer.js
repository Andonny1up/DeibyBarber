import styled from "styled-components";
import Container from "../../components/Container";
import DeibyLogo from "../../components/DeibyLogo";
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import IconButton from "../../components/IconButton";

const StyledFooter = styled.footer`
    background-color: ${props => props.theme.background[20]};
    padding-top: 1rem;
    text-align: center;
`;
const StyledContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 4rem;
`;
const BottomDiv = styled.div`
    background-color: ${props => props.theme.background[10]};
    padding: 1rem;
    text-align: center;
`; 
const Paragraph = styled.p`
    color: ${props => props.theme.text[30]};
`;
const Link = styled.a`
    color: ${props => props.theme.text[30]};
    text-decoration: none;
    &:hover {
        color: ${props => props.theme.primary[60]};
    }
`;

const ContainerIconButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem 0;
`;
const StyledP = styled.p`
    color: ${props => props.theme.text[30]};
    text-align: start;
    line-height: 1.7;
    margin-top: 1rem;
`;
const DivLeft = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 576px) {
        flex-direction: row;
        gap: 2rem;
        justify-content: space-between;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <StyledContainer>
                <DivLeft >
                    <DeibyLogo/>
                    <StyledP>
                        Avenida Ganadera una calle antes de Delipark,
                        <br/>
                        mano izquierda última casa.
                        <br/>
                        Trinidad, Bolivia
                    </StyledP>
                    <ContainerIconButtons>
                        <IconButton icon={faWhatsapp} typeSize="small" 
                        href='https://wa.me/59169404756?text=¡Hola!%20¿Cómo%20estás%3F.%20Quiero%20saber%20más%20sobre%20tus%20servicios%20de%20barbería.'
                        target="_blank"/>
                        <IconButton icon={faFacebook} typeSize="small"
                        href='https://www.facebook.com/DeibyBarbero'
                        target="_blank"/>
                        <IconButton icon={faInstagram} typeSize="small" 
                        href='https://www.instagram.com/deiby_barbershop'
                        target="_blank"/>
                    </ContainerIconButtons>
                </DivLeft>
                <div>

                </div>
            </StyledContainer>
            <BottomDiv>
                <Paragraph> 
                    <Link href="#">CodigoSimple </Link>
                    © Deiby Barber
                    <br />
                    Todos los derechos reservados 2024
                </Paragraph>
            </BottomDiv>
        </StyledFooter>
    );
}

export default Footer;