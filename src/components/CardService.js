import styled from 'styled-components';

const StyledCard = styled.div`
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;
    // box-shadow: 0 0 0.5rem ${props => props.theme.text[30]};
`;

const CardService = ({ children }) => {
    return (
        <StyledCard>
            {children}
        </StyledCard>
    );
}

export default CardService;