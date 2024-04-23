import ProjectCard from "../../components/ProjectCard";
import Container from "../../components/Container";
import styled from "styled-components";

const StyledSection = styled.section`
    background-color: ${props => props.theme.background[20]};
    padding: 3rem 0;
`;

const StyledH2 = styled.h2`
    text-align: center;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    font-weight: 500;
    color: ${props => props.theme.primary[60]};
    
`;
const StyledP = styled.p`
    text-align: center;
    font-weight: 500;
    margin-bottom: 2rem;
`;

const StyledH3 = styled.h3`
  text-align: center;
  color: ${props => props.theme.primary[60]};
`;
const ContainerCard = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 2rem;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
        gap: 1rem;
    }
`;

const ServiceSection = () => {
    return (
        <StyledSection>
        <Container>
            <StyledH2>¿Listo para un corte de cabello que se adapte perfectamente a tu estilo y personalidad?</StyledH2>
            <StyledP >
                Quiero brindarte una experiencia única y personalizada
                <br/>
                Mientras te relajas en la silla, puedes disfrutar de tus videojuegos, películas o series favoritas, ¡porque aquí la diversión y el estilo van de la mano!
            </StyledP>
        </Container>
        <Container>
            <ContainerCard>
                <ProjectCard />
            </ContainerCard>
        </Container>
        </StyledSection>
    );
}

export default ServiceSection;