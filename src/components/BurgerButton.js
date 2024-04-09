import styled from 'styled-components';

const Line = styled.span`
  width: 100%;
  height: 0.15rem;
  background-color: ${props => props.theme.text[20]};
  transition: all 0.3s linear;
  border-radius: 1rem;
`;

const BurgerMenu = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s 0.25s;

  &.active {
    color: ${props => props.theme.primary[60]};
    transform: rotate(90deg);

    ${Line}:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
      background-color: ${props => props.theme.primary[60]};
    }

    ${Line}:nth-child(2) {
      background-color: ${props => props.theme.primary[60]};
      width: 0;
    }

    ${Line}:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
      background-color: ${props => props.theme.primary[60]};
    }
  }
`;

const BurgerButton = ({ isActive,onClick }) => {
  return (
    <BurgerMenu className={isActive ? 'active' : ''} onClick={onClick}>
      <Line />
      <Line />
      <Line />
    </BurgerMenu>
  );
}

export default BurgerButton;