import React from 'react';

import InputMask from 'react-input-mask';

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

  Value?: string;
  Mask: '99999-999' | '999.999.999-99';
  OnBlur?(e: any): any;
  OnChange?(e: any): any;
}

const MaskedInput = ({
  Value,
  OnChange,
  Mask,
  PlaceHolder,
  OnBlur,
}: IInput) => {
  return (
    <InputMask
      mask={Mask}
      value={Value}
      onChange={OnChange}
      placeholder={PlaceHolder}
      onBlur={OnBlur}
      style={{
        width: 400,
        height: 35,
        fontSize: 20,
        borderRadius: 10,
        paddingLeft: 10,
      }}
    />
  );
};

export default MaskedInput;
