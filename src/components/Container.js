import styled from 'styled-components';

const StyledContainer = styled.div`
    
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    position: relative;
  
    @media (min-width: 576px) {
        max-width: 540px;
    }

    @media (min-width: 768px) {
        max-width: 720px;
    }

    @media (min-width: 992px) {
        max-width: 960px;
    }

    @media (min-width: 1200px) {
        max-width: 1140px;
    }`;

const Container = ({ children, className}) => {
  return (
    <StyledContainer className={className}>
      {children}
    </StyledContainer>
  );
}

export default Container;