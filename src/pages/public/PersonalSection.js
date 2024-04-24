import styled from "styled-components";
import Container from "../../components/Container";
import IconButton from "../../components/IconButton";
import { faCut } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import personal from '../../assets/images/personal2.jpg';
import patron from '../../assets/images/patron.png';


const StyledHero = styled.section`
  background-color: ${props => props.theme.background[20]};
  background-image: url(${patron});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${props => props.theme.text[10]};
  padding: 0;
  margin-top: 4rem;
`;
const StyledContainer = styled(Container)`
  padding-bottom: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  @media (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
  }
`;

const StyledChildDivTop = styled.div`
  padding: 2rem 0;
`;
const ImageContainer = styled.div`
  position: relative;
`;
const StyledImg = styled.img`
  width: 100%;
  max-width: 25rem;
`;

const AnimatedText = styled.h1`
  font-family: 'Oswald', sans-serif;

  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.75rem;
  color: ${props => props.theme.primary[60]};
  overflow: hidden;
  white-space: nowrap;
  border-right: .15em solid ${props => props.theme.primary[70]};
  width: 0;
  animation: typing 2s steps(40, end) forwards, blink-caret .75s step-end infinite;

  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: ${props => props.theme.primary[70]}; }
  }
  @media (min-width: 576px) {
    font-size: 2rem;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1.25rem;
  color: ${props => props.theme.text[10]};
  @media (min-width: 576px) {
    font-size: 1.5rem;
  }
`;

const StyledH1 = styled.h1`
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-size: 1.75rem;
  font-weight: 500;
  color: ${props => props.theme.text[10]};
  
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const StyledP = styled.p`
  color: ${props => props.theme.text[10]};
  font-family: 'Roboto' , sans-serif;
  font-size: 1rem;
  max-width: 30rem;
  @media (min-width: 576px) {
    font-size: 1.25rem;
  }
`;
const ContainerIconButtons = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
`;
const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0), ${props => props.theme.background[20]});
  z-index: 1;
`;

const PersonalSection = () => {
  return (
    <StyledHero>
      <StyledContainer>
        <StyledChildDivTop>
          <div>
            <ImageContainer>
              <StyledImg  src={personal} alt="Deiby"/>
              <StyledOverlay/>
            </ImageContainer>
          </div>
        </StyledChildDivTop>
        
        <div>
          <TitleContainer>
            
            <StyledH1>¡Hola! Soy Deiby</StyledH1>
            <StyledIcon icon={faCut} />
          </TitleContainer>
          <div style={{width: 'fit-content'}}>
            <AnimatedText>Barbero Profesional</AnimatedText>
          </div>
          <StyledP >
          Con más de 10 años de experiencia en el arte del corte de cabello, delineado de cejas y perfilado de barba, estoy aquí para ofrecerte una experiencia única y personalizada en cada visita a la barbería
          </StyledP >
          <ContainerIconButtons>
            <IconButton icon={faWhatsapp} href='https://wa.me/59169404756?text=¡Hola!%20¿Cómo%20estás%3F.%20Quiero%20saber%20más%20sobre%20tus%20servicios%20de%20barbería.'
            target="_blank"/>
            <IconButton icon={faFacebook} href='https://www.facebook.com/DeibyBarbero'
            target="_blank"/>
            <IconButton icon={faInstagram} href='https://www.instagram.com/deiby_barbershop'
            target="_blank"/>
          </ContainerIconButtons>
          
        </div>
      </StyledContainer>
    </StyledHero>
  );
}
export default PersonalSection;