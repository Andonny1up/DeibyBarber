// ProfilePicture.js
import React from 'react';
import styled from 'styled-components';

const StyledProfilePicture = styled.div`
    overflow: hidden;
`;
const StyledImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto;
`;

function ProfilePicture({ src }) {
  return (
    <StyledProfilePicture >
      <StyledImage  src={src} alt="Profile" />
    </StyledProfilePicture>
  );
}

export default ProfilePicture;