import styled from 'styled-components';

const Title3 = styled.h3`
    font-family: 'October Crow', sans-serif;
    font-size: 1.75rem;
    font-weight: normal;
    text-transform: uppercase;
    color: ${props => props.theme.text[10]};
    margin-bottom: 5px;
`;

export default Title3;