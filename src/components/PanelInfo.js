// UserDetail.js
import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
`;
const StyledP = styled.p`
    font-size: 1.25rem;
    margin-bottom: 1rem;
`;
const StyledDiv = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

function PanelInfo({ title, value }) {
  return (
    <StyledDiv>
      <StyledH3>{title}</StyledH3>
      <StyledP >{value}</StyledP>
      <hr/>
    </StyledDiv>
  );
}

export default PanelInfo;