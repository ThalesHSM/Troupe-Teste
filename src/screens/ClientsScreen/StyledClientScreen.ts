import styled, { css } from 'styled-components';

export const StyledMainDiv = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(125deg, #00103a 0%, #3e5f77 100%);
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
  font-family: 'Lato', sans-serif;
`;

export const StyledLogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  font-size: 20px;
  letter-spacing: 0.8px;
  background-color: #e1e2ed;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
`;
