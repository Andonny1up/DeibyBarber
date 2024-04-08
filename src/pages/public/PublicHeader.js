import { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import Container from '../../components/Container';
import DeibyLogo from '../../components/DeibyLogo';
import BurgerButton from '../../components/BurgerButton';

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${props => props.theme.background[20]};
    text-align: center;
    z-index: 1000;
`;
const StiledContainerHeader = styled.div`
    padding: 0.9rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const PublicHeader = () => {
    const [isActive, setIsActive] = useState(false);
    
    const handleBurgerClick = () => {
        setIsActive(!isActive);
    }
  
    return (
        <StyledHeader>
            <Container>
            <StiledContainerHeader>
                <DeibyLogo />
                <BurgerButton isActive={isActive} onClick={handleBurgerClick}/>
            </StiledContainerHeader>
            {/* <nav className="header_nav">
                <ul className="header_nav-list">
                    <li className="nav-item active"><a href="">Inicio</a></li>
                    <li className="nav-item"><a href="">Servicios</a></li>
                    <li className="nav-item"><a href="">Mangas</a></li>
                    <li className="nav-item"><a href="">Contacto</a></li>
                </ul>
            </nav> */}
            </Container>
        </StyledHeader>
    );
}

export default PublicHeader;