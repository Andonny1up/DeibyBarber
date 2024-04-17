import { useState, useEffect } from 'react';
import { Field } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { checkAuth } from '../services/authService';
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

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 1.25rem;
  font-family: 'Oswald', sans-serif;
  cursor: pointer;
  color: ${props => props.theme.text[10]};
  background-color: ${props => props.theme.background[10]};
`;
const StyleOption = styled.option`
  font-size: 1.25rem;
  font-family: 'Oswald', sans-serif;
  padding: 100px;
`;
const Group = styled.div`
  margin-bottom: 1rem;
`;

const SelectApi = ({ name, label, apiURL, transformData }) => {
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const pass = checkAuth();
    if (!pass) {
      navigate('/login');
      return;
    }

    const fetchOptions = async () => {
      try {
        const response = await axios.get(apiURL,{
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        });
        setOptions(transformData(response.data));
      } catch (error) {
        console.error('Error al obtener los datos', error);
      }
    };

    fetchOptions();
  }, [apiURL, transformData]);

  return (
    <Group>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <Field as={StyledSelect} name={name}>
        <StyleOption value="">--Seleccionar--</StyleOption>
        {options.map(option => (
          <StyleOption key={option.value} value={option.value}>
            {option.label}
          </StyleOption >
        ))}
      </Field>
    </Group>
  );
}

export default SelectApi;