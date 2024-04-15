// ProfilePicture.js
import React from 'react';
import styled from 'styled-components';


const StyledProfilePicture = styled.div`
  overflow: hidden;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;
`;

function ProfilePicture({ src, size='100px'  }) {
  return (
    <StyledProfilePicture >
      <StyledImage  src={src} alt="Profile" width={size} height={size}/>
    </StyledProfilePicture>
  );
}

export default ProfilePicture;