import styled from 'styled-components';
import logo from '../assets/logo.svg';

const LogoName = styled.span`
    display: block;
    font-size: 1.8rem;
    font-family: "Oswald", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    color: ${props => props.theme.text[20]};
`;
const BrandLogo = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
`;

const DeibyLogo = () => {
  return (
    <BrandLogo href="" className="brand_logo">
      <img src={logo} className="logo" alt="logo" />
      <LogoName>
        DEIBY BARBER
      </LogoName>
    </BrandLogo>
  );
}

export default DeibyLogo;