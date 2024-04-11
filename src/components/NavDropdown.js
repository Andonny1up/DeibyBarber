import styled from 'styled-components';
import { useState } from 'react';

const StyledDropdown = styled.li`
    overflow: hidden;
`;
const BtnDropdown = styled.button`
    font-family: "Oswald", sans-serif;
    font-weight: 500;
    font-size: 1.25rem;
    background-color: transparent;
    border: none;
    width: 100%;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${props => props.theme.text[10]};
    cursor: pointer;
    padding: 0.5rem 1rem;
`;
const MenuShow = styled.ul`
    width: 91%;
    margin-left: auto;
    border-left: 0.2rem solid ${props => props.theme.primary[10]};
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease-in-out;

    &.active{
        max-height: 500px;
    }
`;

const StyledSpan = styled.span`
    margin-left: auto;
    font-size: 1.4rem;
    transition: transform .3s;
    
    &.ddown-arrow{
        transform: rotate(-90deg);
    }
`;


const NavDropdown = ({ text, children,icon }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isActive = isOpen;

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <StyledDropdown>
            <BtnDropdown onClick={toggleDropdown}>
                <span className="material-icons-round">
                    {icon}
                </span>
                {text}
                <StyledSpan  className={`material-icons-round ${isActive ? 'ddown-arrow': ''}`}>
                    expand_more
                </StyledSpan>
            </BtnDropdown>
            <MenuShow className={`${isActive ? 'active': ''}`}>
                {children}
            </MenuShow>
        </StyledDropdown>
    );
}
export default NavDropdown;