import React, { useRef } from "react";
import styled from "styled-components";

const ContainerInput = styled.div`
  width: fit-content;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 1rem;
  border-bottom: 1px solid ${props => props.theme.text[30]};
  border-radius: 0.25rem;

  background-color: ${props => props.theme.background[10]};
`;
const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
  color: ${props => props.theme.text[10]};
  background-color: transparent;
`;

const SearchInput = ({ value, onChange }) => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  }
  
  return (
    <ContainerInput>
      <Input
        type="text"
        value={value}
        onChange={ e => onChange(e.target.value)}
        placeholder="Buscar"
        ref={inputRef}
      />
      <span className="material-icons-round" onClick={handleFocus}>
        search
      </span>
    </ContainerInput>
    );
}

export default SearchInput;