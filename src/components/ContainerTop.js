import Container from "./Container"
import styled from "styled-components"

const StyledContainerTop = styled(Container)`
    margin-top: 7rem;
`;

const ContainerTop = ({children}) =>{
    return (
        <StyledContainerTop>
            {children}
        </StyledContainerTop>
    )
}

export default ContainerTop;