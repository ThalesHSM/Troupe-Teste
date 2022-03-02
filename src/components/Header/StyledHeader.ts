import styled from 'styled-components';

export const StyledHeaderDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
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
