import styled from "styled-components";
import { Field } from "formik";

const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;
const StyledSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
`;
const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${StyledSlider} {
    background-color: ${props => props.theme.info[50]};
  }

  &:focus + ${StyledSlider} {
    box-shadow: 0 0 1px ${props => props.theme.info[50]};
  }

  &:checked + ${StyledSlider}:before {
    transform: translateX(26px);
  }
`;

const ToggleSwitch = ({name, label}) => {
    return (
        <div>
            <p>{label}</p>
            <StyledSwitch>
                <Field type="checkbox" as={StyledInput} name={name}/>
                <StyledSlider/>
            </StyledSwitch>
        </div>
    );
}

export default ToggleSwitch;