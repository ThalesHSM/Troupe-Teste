import styled, { css } from 'styled-components';

interface IShowPassword {
  showPassword: boolean;
}

export const StyledMainDiv = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: linear-gradient(125deg, #00103a 0%, #3e5f77 100%);
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
  font-family: 'Lato', sans-serif;
`;

export const StyledInput = styled.input`
  width: 300px;
  height: 30px;
  font-size: 20px;
  border-radius: 10px;
  padding-left: 10px;
`;

export const StyledShowPasswordButton = styled.button<IShowPassword>`
  position: relative;

  width: 20px;
  height: 20px;
  background-color: transparent;
  margin-left: 10px;
  margin-top: 15px;
  border: 1px solid black;
  ${(props) =>
    props.showPassword === true &&
    css`
      ::before {
        position: absolute;
        left: -4;
        top: 50%;
        height: 50%;
        width: 3px;
        background-color: #336699;
        content: '';
        transform: translateX(10px) rotate(-45deg);
        transform-origin: left bottom;
      }
      ::after {
        position: absolute;
        left: -3;
        bottom: 0;
        height: 3px;
        width: 100%;
        background-color: #336699;
        content: '';
        transform: translateX(10px) rotate(-45deg);
        transform-origin: left bottom;
      }
    `};
`;

export const StyledLoginButton = styled.button`
  background-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  width: 150px;
  height: 30px;
  font-size: 20px;
  :hover {
    transition: 0.2s;
    opacity: 0.4;
  }
`;
