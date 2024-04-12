import styled from "styled-components";

const StyledCard = styled.div`
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
    padding: 2rem;
    border-radius: 0.5rem;
`;


const Card =({children}) => {
    return (
        <StyledCard>
            {children}
        </StyledCard>
    );
}

export default Card;