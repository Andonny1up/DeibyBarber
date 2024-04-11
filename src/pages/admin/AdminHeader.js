import styled from "styled-components";
import BurgerButton from "../../components/BurgerButton";
import DeibyLogo from "../../components/DeibyLogo";
import NavAdmin from "../../components/NavAdmin";
import { useState } from "react";

const StyledContainerHeader = styled.div`
    padding: 0.9rem 0;
    z-index: 1000;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${props => props.theme.background[20]};
    box-shadow: 0 0.1rem 0.5rem rgba(255,255,255,0.1);
`;
const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
`;
const AdminHeader = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
    <StyledContainerHeader >
      <StyledContainer>
        <BurgerButton isActive={false} onClick={toggleMenu}/>
        <DeibyLogo />
      </StyledContainer>
      
    </StyledContainerHeader>
    <NavAdmin isActive={isActive} onClickClose={toggleMenu}/>
    </header>
  );
}

export default AdminHeader;