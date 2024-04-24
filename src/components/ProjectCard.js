import styled from "styled-components";

const StyledFigure = styled.figure`
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 0 0 0.5rem 0.25rem ${props => props.theme.text[10]};
    // &:hover {
    //     box-shadow: 0 0 0.5rem 0.25rem ${props => props.theme.text[10]};
    // }
`;
const StyledImg = styled.img`
    width: 100%;
    display: block;
`;

const ProjectCard = ({ image }) => {
    return (
        <StyledFigure>
            <StyledImg src={image} alt="Project" />
        </StyledFigure>
    );
}

export default ProjectCard;