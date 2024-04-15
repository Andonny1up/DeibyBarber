import styled from "styled-components";

const StyledLink = styled.a`
    width: fit-content;
    display: flex;
    align-items: center;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0.25rem;
    color: black;
    background-color: white;
    border-radius: 0.25rem;
    cursor: pointer;

    &.add{
        color: white;
        background-color: ${props => props.theme.success[60]};
    }
    &.add:hover{
        color: white;
        background-color: ${props => props.theme.success[50]};
    }

    &.view {
        color: white;
        background-color: ${props => props.theme.warning[60]};
    }
    &.view:hover {
        color: white;
        background-color: ${props => props.theme.warning[50]};
    }

    &.edit {
        color: white;
        background-color: ${props => props.theme.info[60]};
    }
    &.edit:hover {
        color: white;
        background-color: ${props => props.theme.info[50]};
    }
    &.delete {
        color: white;
        background-color: ${props => props.theme.danger[60]};
    }
    &.delete:hover {
        color: white;
        background-color: ${props => props.theme.danger[50]};
    }
    &.md{
        font-size: 1rem;
        padding: 0.5rem 1rem;
    }
`;
const StyledButton = styled.button`
    display: flex;
    align-items: center;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0.25rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;

    &.add{
        color: white;
        background-color: ${props => props.theme.success[60]};
    }
    &.add:hover{
        color: white;
        background-color: ${props => props.theme.success[50]};
    }
    
    &.view {
        color: white;
        background-color: ${props => props.theme.warning[60]};
    }
    &.view:hover {
        color: white;
        background-color: ${props => props.theme.warning[50]};
    }

    &.edit {
        color: white;
        background-color: ${props => props.theme.info[60]};
    }
    &.edit:hover {
        color: white;
        background-color: ${props => props.theme.info[50]};
    }
    &.delete {
        color: white;
        background-color: ${props => props.theme.danger[60]};
    }
    &.delete:hover {
        color: white;
        background-color: ${props => props.theme.danger[50]};
    }
    &.md{
        font-size: 1rem;
        padding: 0.5rem 1rem;
    }
`;
const StyledSpan = styled.span`
    font-size: 1rem;
    margin-right: 0;

    @media (min-width: 576px) {
        margin-right: 0.25rem;
    }
`;
const SpanText = styled.span`
    display: none;
    
    @media (min-width: 576px) {
        display: block;
    }
`;


const ActionButton = ({ onClick,type, href,icon, text, size }) => {
    if (!icon) {
        switch (type) {
            case 'add':
              icon = 'add_circle';
              break;
            case 'view':
              icon = 'visibility';
              break;
            case 'edit':
              icon = 'edit';
              break;
            case 'delete':
              icon = 'delete';
              break;
            default:
              icon = 'touch_app';
              break;
        }
    }
    if (!text) {
        switch (type) {
            case 'add':
              text = 'Crear';
              break;
            case 'view':
              text = 'Ver';
              break;
            case 'edit':
              text = 'Editar';
              break;
            case 'delete':
              text = 'Eliminar';
              break;
            default:
              text = 'Default';
              break;
        }
    }

    if (href) {
        return (
            <StyledLink  href={href} className={`${ type ? type : '' } ${ size ? size : '' }`}>
                <StyledSpan className={`material-icons-round ${ size ? size : '' }`}>
                    {icon}
                </StyledSpan>
                <SpanText>
                    {text}
                </SpanText>
            </StyledLink >
        )
    }
    return (
        <StyledButton onClick={onClick} className={`${ type ? type : '' } ${ size ? size : '' }`}>
            <StyledSpan className={`material-icons-round ${ size ? size : '' }`}>
                {icon}
            </StyledSpan>
            <SpanText>
                {text}
            </SpanText>
        </StyledButton>
    )
};

export default ActionButton;