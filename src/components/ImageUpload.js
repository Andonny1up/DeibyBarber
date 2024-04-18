import React, { useState } from 'react';
import { ErrorMessage, useFormikContext } from 'formik';
import styled from 'styled-components';
import ProfilePicture from './ProfilePicture';

const StyledLabel = styled.label`
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.text[20]};
`;
const StyledInput = styled.input`
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    outline: none;
    border-radius: 0.25rem;
    color: ${props => props.theme.text[10]};
    background-color: ${props => props.theme.background[10]};
`;

const StyledError = styled(ErrorMessage)`
    display: flex;
    justify-content: flex-end;
    aling-items: center;
    font-family: "Oswald", sans-serif;
    font-size: 1rem;
    color: ${props => props.theme.primary[80]};
`;
const ContainerImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const ImageUpload = ({ label, name, initialImage }) => {
  const [image, setImage] = useState(initialImage);
  const { setFieldValue } = useFormikContext();

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setFieldValue(name, e.target.files[0]);
    }
  };

  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
      <ContainerImage>
      {image && <ProfilePicture src={image} alt="Preview" size="250px"/>}
      </ContainerImage>
      <StyledInput type="file" name={name} onChange={handleImageChange} accept="image/*"/>
      <StyledError name={name} component="div" />
    </div>
  );
};

export default ImageUpload;