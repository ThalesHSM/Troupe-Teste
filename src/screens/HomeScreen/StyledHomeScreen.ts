import styled from 'styled-components';

export const StyledMainDiv = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
  font-family: 'Lato', sans-serif;
`;

export const StyledTitle = styled.h1`
  letter-spacing: 15px;
  margin-bottom: 80px;
`;

export const StyledModal = styled.div`
  background-color: #f7f7f7;
  border-radius: 20px;
  width: 25vw;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  margin-right: 20px;
`;
