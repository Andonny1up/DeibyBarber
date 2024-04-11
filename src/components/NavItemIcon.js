import React from 'react';
import styled from 'styled-components';

const StyledNavItem = styled.li`
    text-align: center;
    &.active{
        background-color: ${props => props.theme.primary[60]};
    }
`;
const StyledLink = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-family: "Oswald", sans-serif;
    font-weight: 500;
    font-size: 1.25rem;

    color: ${props => props.theme.text[10]};
    cursor: pointer;
    padding: 0.5rem 1rem;
`;

const NavItemIcon = ({ href, children,icon, isActive, onClick}) => (
  <StyledNavItem className={`${isActive ? 'active' : ''}`} onClick={onClick}>
    <StyledLink href={href}>
        <span className="material-icons-round">
            {icon}
        </span>
        {children}
    </StyledLink>
  </StyledNavItem >
);

export default NavItemIcon;