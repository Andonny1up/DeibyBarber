import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;
const rotationBack = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-360deg);
    }
`;
const RotatingCircle = styled.span`
    width: ${props => props.size || '48px'};
    height: ${props => props.size || '48px'};
    border: ${props => props.$borderwidth || '3px'} dotted ${props => props.theme.text[10]};
    border-style: solid solid dotted dotted;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: ${rotate} 2s linear infinite;

    &::after {
        content: '';  
        box-sizing: border-box;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        border: ${props => props.$borderwidth || '3px'} dotted ${props => props.theme.primary[60]};
        border-style: solid solid dotted;
        width: calc(${props => props.size || '48px'} / 2);
        height: calc(${props => props.size || '48px'} / 2);
        border-radius: 50%;
        animation: ${rotationBack} 1s linear infinite;
        transform-origin: center center;
    }
`;

export default RotatingCircle;