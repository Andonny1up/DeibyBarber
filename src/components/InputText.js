import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

const StyledLabel = styled.label`
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.text[20]};
`;
const StyledField = styled(Field)`
    font-family: "Oswald", sans-serif;
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    outline: none;
    color: ${props => props.theme.text[10]};
    background-color: ${props => props.theme.background[10]};
    border: none;
    border-bottom: 0.1rem solid ${props => props.theme.primary[60]};
    border-radius: 0.25rem;
    font-size: 1.25rem;
`;
const StyledError = styled(ErrorMessage)`
    display: flex;
    justify-content: flex-end;
    aling-items: center;
    font-family: "Oswald", sans-serif;
    font-size: 1rem;
    color: ${props => props.theme.primary[80]};
`;
const Group = styled.div`
    margin-bottom: 1rem;
`;
const InputText = ({ name, label, type = 'text' }) => {
  return (
    <Group>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledField  name={name} type={type} />
      <StyledError name={name} component="div" />
    </Group>
  );
}

export default InputText;