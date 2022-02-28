import styled, { css } from 'styled-components';

export const StyledMainDiv = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
  font-family: 'Lato', sans-serif;
  background-color: #f7f7f7;
`;

export const StyledInputDiv = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 50px;
  background-color: #fff;
`;
