import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  outline: none;
  border: none;

  background-color: #245993;
  color: white;
  width: 100%;

  border-radius: 10px;
  cursor: pointer;
  letter-spacing: 1px;

  height: 40px;
  font-size: 20px;
  margin-top: 20px;

  :hover {
    transition: 0.2s;
    opacity: 0.9;
  }
`;

export const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    width: 25vw;

    input {
      margin-top: 50px;

      font-size: 20px;
      background-color: transparent;
      border: none;
      border-bottom: 2px solid #245993;
      outline: none;
      :focus {
        outline: none;
      }
    }
  }
`;
