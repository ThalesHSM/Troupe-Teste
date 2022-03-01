import styled from 'styled-components';

export const StyledPersonalInfoDiv = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;

  @media (max-width: 1600px) {
    margin-left: 0px;
    :nth-child(2) {
      margin-left: 10px;
    }
    :nth-child(3) {
      margin-left: 10px;
    }
  }

  @media (max-width: 1500px) {
    :nth-child(3) {
      margin-left: 0px;

      margin-right: 10px;
    }
  }

  @media (max-width: 1000px) {
    margin-left: 0px;
    :nth-child(2) {
      margin-left: 0px;
    }
  }
`;

export const FormContainer = styled.div`
  margin: 0 auto;
  background-color: white;
  border-radius: 20px;
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 50px;
  background-color: #fff;
  padding-left: 50px;
  box-shadow: 0.2px 0.2px 1px 1px #888888;

  form {
    display: flex;
    flex-direction: column;
    padding-top: 5px;

    input {
      width: 400px;

      margin-top: 50px;

      font-size: 20px;
      background-color: transparent;
      color: #3d3d3d;
      border: none;
      border-bottom: 2px solid #245993;

      outline: none;
      :focus {
        outline: none;
      }
    }
    button {
      width: 200px;
      height: 60px;
      font-size: 20px;
      letter-spacing: 0.8px;
      background: linear-gradient(125deg, #5e70f7 0%, #5468ff 100%);
      border: none;
      border-radius: 8px;
      color: white;
      cursor: pointer;

      :hover {
        transition: 0.3s;
        opacity: 0.9;
      }
    }
  }
`;

export const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-right: 130px;
`;
