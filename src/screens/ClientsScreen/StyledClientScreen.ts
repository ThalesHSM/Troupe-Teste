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

export const StyledHeaderDiv = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
`;

export const StyledLogoutButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top: 30px;
  margin-right: 40px;
  padding-bottom: 3px;
  letter-spacing: 1px;
  :hover {
    border-bottom: 1px solid black;
    padding-bottom: 2px;
  }
`;

export const StyledCreateButton = styled.button`
  background-color: #245993;
  color: #fff;
  font-size: 20px;
  border-radius: 10px;
  height: 50px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 200px;
  padding-bottom: 2px;
  letter-spacing: 1px;
  :hover {
    transition: 0.2s;
    opacity: 0.9;
  }
`;
