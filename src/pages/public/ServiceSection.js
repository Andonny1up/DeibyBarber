import Container from "../../components/Container";
import styled from "styled-components";
import Title2 from "../../components/Title2";
import Title3 from "../../components/Title3";
import CardService from "../../components/CardService";
import RazorIcon from "../../assets/svg/razor.svg";
import BeardIcon from "../../assets/svg/beard.svg";
import CutIcon from "../../assets/svg/cut.svg";

const StyledSection = styled.section`
    background-color: ${props => props.theme.background[20]};
    padding: 3rem 0;
`;

const StyledP = styled.p`
    color: ${props => props.theme.text[30]};
    line-height: 1.5;
    font-weight: 500;
    margin-bottom: 2rem;
    max-width: 600px;
`;
const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1rem;
    }

    @media (min-width: 992px) {
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1rem;
    }

    @media (min-width: 1200px) {
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1rem;
    }
`;
const Pagraph = styled.p`
    color: ${props => props.theme.text[30]};
    line-height: 1.5;
    font-weight: 500;
    margin-bottom: 2rem;
    margin-left: 4rem;
`;
const TitleContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;
`;
const IconImage = styled.img`
    width: 3rem;
    height: 3rem;
`;

const ServiceSection = () => {
    return (
        <StyledSection>
        <Container>
            <Title2> Servicios </Title2>
            <StyledP>
            Queremos brindarte una experiencia excepcional que te haga sentir seguro, elegante y listo para enfrentar el mundo.
            <br/>
            Nuestros servicios incluyen:
            </StyledP>
        </Container>
        <Container>
            <ContainerCard>
                <CardService>
                    <TitleContainer>
                        <IconImage src={CutIcon} alt="Razor" />
                        <Title3>Corte de cabello</Title3>
                    </TitleContainer>
                    <Pagraph>Desde cortes tradicionales hasta tendencias de vanguardia, te ayudaremos a encontrar el estilo perfecto que se adapte a tu personalidad y preferencias.</Pagraph>
                </CardService>
                <CardService>
                    <TitleContainer>
                        <IconImage src={BeardIcon} alt="Razor" />
                        <Title3>Perfilado de barba</Title3>
                    </TitleContainer>
                    <Pagraph> Dale forma y define tu barba con un perfilado experto que resalte tu masculinidad y te haga destacar entre la multitud.</Pagraph>
                </CardService>
                <CardService>
                    <TitleContainer>
                        <IconImage src={RazorIcon} alt="Razor" />
                        <Title3>Delineado de cejas</Title3>
                    </TitleContainer>
                    <Pagraph>Resalta tu mirada con un delineado de cejas preciso y profesional que realce tus rasgos faciales y complemente tu estilo.</Pagraph>
                </CardService>
            </ContainerCard>
        </Container>
        </StyledSection>
    );
}

export default ServiceSection;