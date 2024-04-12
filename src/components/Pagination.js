import styled from "styled-components";

const StyleButton = styled.button`
    background-color: ${props => props.theme.primary[60]};
    border: none;
    border-radius: 0.25rem;
    color: white;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    font-size: 1rem;
    padding: 0rem 0.25rem;

    &:hover {
        background-color: ${props => props.theme.primary[50]};
    }

    &:disabled {
        background-color: ${props => props.theme.primary[80]};
        cursor: not-allowed;
    }
`;
const StyledDiv = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

const Pagination = ({ onPageChange, next,previous, total, current }) => {
    return (
      <StyledDiv>
        <StyleButton onClick={() => onPageChange('previous')}
        disabled={!previous}
        >
            <span className="material-icons-round">
                chevron_left
            </span>
        </StyleButton>

        <StyleButton onClick={() => onPageChange('next')}
        disabled={!next}
        >   
            <span className="material-icons-round">
                navigate_next
            </span>
        </StyleButton>
        <span>Pagina {current} de {total} </span>
      </StyledDiv>
    );
};
  
export default Pagination;