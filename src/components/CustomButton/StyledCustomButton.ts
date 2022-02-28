import styled from 'styled-components';

interface IButton {
  children: any;
  icon?: any;
  onClick: () => void;
}

export const StyledButton = styled.button<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  font-size: 20px;
  letter-spacing: 0.8px;
  background: linear-gradient(125deg, #5e70f7 0%, #5468ff 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;

  :hover {
    transition: 0.3s;
    opacity: 0.9;
  }
`;
