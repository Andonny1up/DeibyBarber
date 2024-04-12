import styled from "styled-components";

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
    }
`;

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
    width: 100%;
    @media (min-width: 768px) {
        width: auto;
    }
`;
const StyledSpan = styled.span`
    font-size: 3rem;
`;
const StyledH1 = styled.h1`
    font-size: 2rem;
    margin: 0;
`;


const TitleIconPage = ({ title, icon, children }) => {
    return (
        <ContainerDiv>
        <StyledDiv>
            <StyledSpan  className="material-icons-round">
                {icon}
            </StyledSpan >
            <StyledH1>{title}</StyledH1>
        </StyledDiv>
        <StyledDiv>
            {children}
        </StyledDiv>
        </ContainerDiv>
    );
}

export default TitleIconPage;