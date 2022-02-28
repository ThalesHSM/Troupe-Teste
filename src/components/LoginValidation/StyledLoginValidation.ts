import styled, { css } from 'styled-components';

export const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    input {
      width: 400px;

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
    button {
      background-color: #245993;
      color: white;
      border-radius: 10px;
      cursor: pointer;
      letter-spacing: 1px;
      width: 100%;
      height: 40px;
      font-size: 20px;
      margin-top: 20px;
      outline: none;
      border: none;
      :hover {
        transition: 0.2s;
        opacity: 0.9;
      }
    }
  }
`;
