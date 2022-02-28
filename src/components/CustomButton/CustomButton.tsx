import React from 'react';

import { StyledButton } from './StyledCustomButton';

interface IButton {
  children?: any;
  icon?: any;
  onClick: () => void;
}

const CustomButton = ({ children, icon, onClick }: IButton) => {
  return (
    <StyledButton onClick={onClick}>
      {icon && icon}
      {children}
    </StyledButton>
  );
};

export default CustomButton;
