import { useState, useEffect } from 'react';
import { Field, ErrorMessage } from 'formik';
import { useFormikContext } from 'formik';
import styled from 'styled-components';
import axios from 'axios';

const StyledLabel = styled.label`
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.text[20]};
`;
const StyledDiv = styled.div`
    margin-bottom: 0.5rem;
    font-family: "Roboto", sans-serif;
    font-size: 1.15rem;
`;
const StyledField = styled(Field)`
    margin-right: 0.5rem;
    transform: scale(1.15);
`;

const CheckboxGroup = ({ name, label, apiURL, transformData }) => {
  const [options, setOptions] = useState([]);
  const { values } = useFormikContext();

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get(apiURL,{
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        });
        console.log(response);
        setOptions(transformData(response.data));
      } catch (error) {
        console.error('Error al obtener los datos', error);
      }
    };

    fetchOptions();
  }, [apiURL, transformData]);

  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
      {options.map(option => (
        <StyledDiv key={option.value}>
          <StyledField  type="checkbox" name={`${name}.${option.value}`} checked={values[name] && values[name][option.value]} />
          {option.label}
        </StyledDiv>
      ))}
      <ErrorMessage name={name} component="div" />
    </div>
  );
}

export default CheckboxGroup;