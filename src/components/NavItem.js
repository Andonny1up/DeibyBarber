import React from 'react';
import styled from 'styled-components';

const StyledNavItem = styled.li`
    text-align: center;
    &.active{
        background-color: ${props => props.theme.primary[60]};
    }
`;
const StyledLink = styled.a`
    font-family: "October Crow", sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    display: block;
    width: 100%;
    height: 100%;
    padding: 1rem 0;
    color: ${props => props.theme.text[10]};
    text-transform: uppercase;
`;

const NavItem = ({ href, children, isActive }) => (
  <StyledNavItem className={`${isActive ? 'active' : ''}`}>
    <StyledLink href={href}>{children}</StyledLink>
  </StyledNavItem >
);

export default NavItem;