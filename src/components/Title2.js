import styled from 'styled-components';

const Title2 = styled.h2`
    font-family: 'Oswald', sans-serif;
    font-size: 2rem;
    font-weight: 500;
    text-transform: uppercase;
    color: ${props => props.theme.text[10]};
`;

export default Title2;