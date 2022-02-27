import styled, { css } from 'styled-components';

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
  OnBlur?(): any;
  OnChange?(e: any): any;
}

export const StyledInput = styled.input<IInput>`
  width: 400px;
  height: 35px;
  font-size: 20px;
  border-radius: 10px;
  padding-left: 10px;
  ${(props) =>
    props.inputSize === 'sm'
      ? css`
          width: 100px;
        `
      : props.inputSize === 'md' &&
        css`
          width: 150px;
        `}
`;
