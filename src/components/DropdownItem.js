import styled from 'styled-components';

const StyledLink = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-family: "Oswald", sans-serif;
    font-weight: 500;
    font-size: 1.25rem;

    color: ${props => props.theme.text[10]};
    cursor: pointer;
    padding: 0.5rem 0;
    padding-left: 2rem;
    
    &.active{
      background-color: ${props => props.theme.primary[60]};
    }
`;

const DropdownItem = ({ children, icon, href, isActive }) => {
  return (
    <li>
        <StyledLink href={href} className={`${isActive ? 'active' : ''}`} >
            <span className="material-icons-round">
                {icon}
            </span>
            {children}
        </StyledLink>
    </li>
  );
}
export default DropdownItem;