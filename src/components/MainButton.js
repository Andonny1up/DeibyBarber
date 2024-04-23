import styled from 'styled-components';

const StyledButton = styled.button`
    display: block;
    font-family: 'Oswald', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    border: none;
    padding: 0.5rem 1rem;
    margin-top: 2rem;
    cursor: pointer;
    background-color: ${props => props.theme.primary[60]};
    color: ${props => props.theme.text[10]};

    &:hover {
        background-color: ${props => props.theme.primary[40]};
    }
`;

const StyledLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    font-family: 'Oswald', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    border: none;
    padding: 0.5rem 1rem;
    margin-top: 2rem;
    cursor: pointer;
    background-color: ${props => props.theme.primary[60]};
    color: ${props => props.theme.text[10]};

    &:hover {
        background-color: ${props => props.theme.primary[40]};
    }
`;

const MainButton = ({ children, onClick, href, ...props }) => {
    if (href) {
        return (
            <StyledLink href={href} {...props}>
                {children}
            </StyledLink>
        );
    }
    return (
        <StyledButton  onClick={onClick} {...props}>
            {children}
        </StyledButton >
    );
}

export default MainButton;