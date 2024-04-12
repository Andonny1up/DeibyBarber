import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1rem;
  background-color: ${props => props.theme.background[20]};
  outline: none;
  border-radius: 0.25rem;
  height: fit-content;
  color: ${props => props.theme.text[10]};
  padding: 0.25rem;
  cursor: pointer;
`;

const PageSizeSelector = ({ onPageSizeChange }) => {
    return (
      <StyledSelect onChange={(e) => onPageSizeChange(e.target.value)}>
        <option value="10">10</option>
        <option value="1">1</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </StyledSelect>
    );
  };
  
  export default PageSizeSelector;