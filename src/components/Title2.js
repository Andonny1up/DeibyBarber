import styled from 'styled-components';

const Title2 = styled.h2`
    font-family: 'October Crow', sans-serif;
    font-size: 2rem;
    font-weight: normal;
    text-transform: uppercase;
    color: ${props => props.theme.text[10]};
`;

export default Title2;