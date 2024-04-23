import styled from "styled-components";
import IconButton from "./IconButton";
import { faLink } from '@fortawesome/free-solid-svg-icons';

const StyledFigure = styled.figure`
    width: 100%;
    min-height: 400px;
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 0 0 0.5rem 0.25rem ${props => props.theme.primary[70]};

    &:hover {
        transform: scale(1.05);
    }
`;
const StyledImg = styled.img`
    width: 100%;
    display: block;
`;
const StyledFigcaption = styled.figcaption`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background-color: ${props => props.theme.background[10]};
    color: ${props => props.theme.text[10]};
    font-size: 1.25rem;
    text-align: center;
`;

const ProjectCard = ({ children, image }) => {
    return (
        <StyledFigure>
            <StyledImg src='https://andonny1up.github.io/img/port1.jpg' alt="Project" />
            <StyledFigcaption>
                <IconButton href='/' icon={faLink} typeSize='small'/>
                {children}
            </StyledFigcaption>
        </StyledFigure>
    );
}

export default ProjectCard;