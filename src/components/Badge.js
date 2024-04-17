import styled from "styled-components";

const badge = {
    // Badge primary styles
    primary: {
        backgroundColor: '#007bff',
    },
    // Badge secondary styles
    secondary: {
        backgroundColor: '#6c757d',
    },
    // Badge success styles
    success: {
        backgroundColor: '#28a745',
    },
    // Badge danger styles
    danger: {
        backgroundColor: '#dc3545',
    },
    // Badge warning styles
    warning: {
        backgroundColor: '#ffc107',
    },
    // Badge info styles
    info: {
        backgroundColor: '#17a2b8',
    },
    // Badge light styles
    light: {
        backgroundColor: '#f8f9fa',
    },
    // Badge dark styles
    dark: {
        backgroundColor: '#343a40',
    },
};

const StyledBadge = styled.span`
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    color: #fff;
    background-color: ${props => props.theme.primary[60]};

    &.primary {
        background-color: ${badge.primary.backgroundColor};
    }
    &.secondary {
        background-color: ${badge.secondary.backgroundColor};
    }
    &.success {
        background-color: ${badge.success.backgroundColor};
    }
    &.danger {
        background-color: ${badge.danger.backgroundColor};
    }
    &.warning {
        background-color: ${badge.warning.backgroundColor};
    }
    &.info {
        background-color: ${badge.info.backgroundColor};
    }
    &.light {
        background-color: ${badge.light.backgroundColor};
    }
    &.dark {
        background-color: ${badge.dark.backgroundColor};
    }
`;
const Badge = ({type,text}) => {
    return (
        <StyledBadge className={type}>{text}</StyledBadge >
    );
}

export default Badge;