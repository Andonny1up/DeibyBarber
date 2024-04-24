import styled from 'styled-components';
import Container from "../../components/Container";
import Title2 from "../../components/Title2";
import Title3 from "../../components/Title3";
import ProjectCard from "../../components/ProjectCard";
import Gif1 from "../../assets/gif/0423.gif";
import Gif2 from "../../assets/gif/0424.gif";

const SectionContainer = styled.section`
    padding-top: 5rem;
    padding-bottom: 5rem;
`;
const PagraphInfo = styled.p`
    color: ${props => props.theme.text[30]};
    font-size: 1rem;
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: 2rem;

    @media (min-width: 576px) {
        font-size: 1.25rem;
    }
`;
const Pagraph = styled.p`
    color: ${props => props.theme.text[30]};
    line-height: 1.5;
    font-weight: 500;
    margin-bottom: 2rem;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;
const DivLeft = styled.div`
    display: flex;
    gap: 2rem;

    @media (min-width: 768px) {
        flex-direction: row-reverse;
    }
`;
const AboutSection = () => {
    return(
        <SectionContainer>
            <Container>
                <Title2>Barberia profesional y tienda de mangas</Title2>
                <PagraphInfo>
                En Deiby Barber, nuestro objetivo es ofrecerte más que un simple corte de cabello: queremos brindarte una experiencia única y personalizada en cada visita a nuestra barbería.
                </PagraphInfo>
                <InfoContainer>
                    <DivLeft>
                        
                        <div>
                        <ProjectCard image={Gif1}/>
                        </div>
                        <div>
                        <Title3>Desde 2014</Title3>
                        <Pagraph>
                        Con más de 10 años de experiencia en el mundo del estilismo masculino.
                        </Pagraph>
                        </div>
                    </DivLeft>
                    <div style={
                        {
                            display: 'flex',
                            gap: '2rem'
                        }
                    
                    }>
                        <div>
                        <Title3>Diviértete</Title3>
                        <Pagraph>
                        Mientras te relajas en la silla, puedes disfrutar de tus videojuegos, películas o series favoritas.
                        </Pagraph>
                        </div>
                        <div>
                        <ProjectCard image={Gif2}/>
                        </div>
                    </div>
                </InfoContainer>
            </Container>
        </SectionContainer>
    );
}

export default AboutSection;