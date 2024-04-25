import { useState } from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';
import DeibyLogo from '../../components/DeibyLogo';
import BurgerButton from '../../components/BurgerButton';
import NavMenu from '../../components/NavMenu';

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${props => props.theme.background[20]};
    text-align: center;
    z-index: 1000;
`;
const StyledContainerHeader = styled.div`
    padding: 0.9rem 0;
    z-index: 1000;
    position: relative;
    background-color: ${props => props.theme.background[20]};
`;
const StyledContainer = styled(Container)`
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
                <StyledContainerHeader>
                <StyledContainer>
                    <DeibyLogo />
                    <BurgerButton isActive={isActive} onClick={handleBurgerClick}/>
                </StyledContainer>    
                </StyledContainerHeader>
            <NavMenu isActive={isActive} setIsActive={setIsActive}/>
        </StyledHeader>
    );
}

export default PublicHeader;