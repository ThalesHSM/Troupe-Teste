import React from 'react';

import { StyledInput } from './StyledInput';

interface IInput {
  inputSize?: 'sm' | 'md';
  PlaceHolder?:
    | 'Nome'
    | 'Email'
    | 'Password'
    | 'CPF'
    | 'CEP'
    | 'Rua'
    | 'Número'
    | 'Bairro'
    | 'Cidade';

  Type?: 'text' | 'email' | 'password';
  Value?: string;
  OnBlur?(e: any): any;
  OnChange?(e: any): any;
}

const Input = ({
  inputSize,
  PlaceHolder,
  Type,
  OnBlur,
  OnChange,
  Value,
}: IInput) => {
  return (
    <StyledInput
      inputSize={inputSize}
      placeholder={PlaceHolder}
      type={Type}
      onBlur={OnBlur}
      onChange={OnChange}
      value={Value}
    />
  );
};

export default Input;
