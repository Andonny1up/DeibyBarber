import styled from 'styled-components';
import Container from "../../components/Container";
import Title2 from "../../components/Title2";
import Title3 from "../../components/Title3";

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
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;
const AboutSection = () => {
    return(
        <SectionContainer>
            <Container>
                <Title2>Barberia profesional y tienda de mangas</Title2>
                <PagraphInfo>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rerum debitis fugiat doloribus
                    sapiente
                    odit ducimus neque excepturi, nostrum perferendis.
                </PagraphInfo>
                <InfoContainer>
                    <div>
                        <Title3>Desde 2024</Title3>
                        <Pagraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rerum debitis fugiat doloribu
                        </Pagraph>
                    </div>
                    <div>
                        <Title3>+100 clientes</Title3>
                        <Pagraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rerum debitis fugiat doloribu
                        </Pagraph>
                    </div>
                </InfoContainer>
            </Container>
        </SectionContainer>
    );
}

export default AboutSection;