import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledLink = styled.a`
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.background[10]};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    color: red;

    &:hover {
        background-color: ${props => props.theme.background[5]};
    }

    &.small {
        width: 2rem;
        height: 2rem;
    }
}`;

const StyledButton = styled.button`
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.background[10]};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    color: red;

    &:hover {
        background-color: ${props => props.theme.background[5]};
    }

    &.small {
        width: 2rem;
        height: 2rem;
    }
}`;
const StyledIcon = styled(FontAwesomeIcon)`
    width: 1.5rem;
    height: 1.5rem;
    color: ${props => props.theme.text[10]};

    &.small {
        width: 1rem;
        height: 1rem;
    }
}`;

const IconButton = ({ icon, onClick, href, typeSize, ...props }) => {
    if (href) {
        return (
            <StyledLink href={href} className={`${ typeSize ? typeSize: '' }`} {...props}>
                <StyledIcon icon={icon} className={`${ typeSize ? typeSize: '' }`}/>
            </StyledLink>
        );
    }
    return (
        <StyledButton onClick={onClick} className={`${ typeSize ? typeSize: '' }`}>
            <StyledIcon icon={icon} className={`${ typeSize ? typeSize: '' }`}/>
        </StyledButton>
    );
}

export default IconButton;