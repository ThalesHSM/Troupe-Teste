import React, { useState } from 'react';
import validator from 'validator';

import {
  handleCreateClient,
  handleGetCEP,
  handleGetClients,
} from '@Config/api/api';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledCreateButton, StyledInputDiv } from './StyledCreateClient';

import Input from '../Input/Input';
import MaskedInput from '../Input/MaskedInput';

import { Spinner } from 'react-activity';
import 'react-activity/dist/library.css';

interface IClient {
  Nome: string;
  CPF: string;
  Email: string;
  CEP: string;
  Rua: string;
  Número: string;
  Bairro: string;
  Cidade: string;
}

function CreateClient({ setShowModal }: any) {
  const [newClient, setNewClient] = useState<IClient>({
    Nome: '',
    CPF: '',
    Email: '',
    Bairro: '',
    CEP: '',
    Cidade: '',
    Número: '',
    Rua: '',
  });
  const [isLoading, setisLoading] = useState<boolean>(false);

  async function Create() {
    if (!validator.isEmail(newClient.Email)) {
      toast.error('O Email não é válido!', {
        position: 'top-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (
      newClient.Nome.length > 0 &&
      newClient.CPF.length > 0 &&
      newClient.CEP.length > 0 &&
      newClient.Rua.length > 0 &&
      newClient.Número.length > 0 &&
      newClient.Bairro.length > 0 &&
      newClient.Cidade.length > 0
    ) {
      setisLoading(true);
      await handleCreateClient(newClient);
      const allClients = await handleGetClients();

      setisLoading(false);
      setShowModal(false);
      return;
    }
    toast.error('Complete todos os campos!', {
      position: 'top-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  async function onBlurCep(e: any) {
    const { value } = e.target;

    const newCEPNumbers = value.replace('-', '');

    if (newCEPNumbers?.length !== 8) {
      toast.error('O CEP não existe!', {
        position: 'top-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const newCEP = await handleGetCEP(newCEPNumbers);

    setNewClient({
      ...newClient,
      Cidade: newCEP.localidade,
      Bairro: newCEP.bairro,
      Rua: newCEP.logradouro,
    });
  }

  function handleChange(e: any) {
    const { value } = e.target;
    const { placeholder } = e.target;
    setNewClient({
      ...newClient,
      [placeholder]: value,
    });
  }

  return (
    <StyledInputDiv>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h2 style={{ display: 'flex', alignSelf: 'center' }}>Criar Cliente</h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-evenly',
          marginLeft: 40,
          marginRight: 40,
        }}
      >
        <Input
          Type="text"
          PlaceHolder="Nome"
          OnChange={(e) => {
            handleChange(e);
          }}
          Value={newClient.Nome}
        />
        <Input
          Type="text"
          PlaceHolder="Email"
          OnChange={(e) => {
            handleChange(e);
          }}
          Value={newClient.Email}
        />

        <MaskedInput
          Mask="999.999.999-99"
          Value={newClient.CPF}
          OnChange={(e) => {
            handleChange(e);
          }}
          PlaceHolder="CPF"
        />

        <MaskedInput
          Mask="99999-999"
          Value={newClient.CEP}
          OnChange={(e) => {
            handleChange(e);
          }}
          OnBlur={(e) => onBlurCep(e)}
          PlaceHolder="CEP"
        />

        <Input
          Type="text"
          PlaceHolder="Rua"
          OnChange={(e) => {
            handleChange(e);
          }}
          Value={newClient.Rua}
        />
        <Input
          Type="text"
          PlaceHolder="Número"
          inputSize="sm"
          OnChange={(e) => {
            handleChange(e);
          }}
          Value={newClient.Número}
        />
        <Input
          Type="text"
          PlaceHolder="Bairro"
          OnChange={(e) => {
            handleChange(e);
          }}
          Value={newClient.Bairro}
        />
        <Input
          Type="text"
          PlaceHolder="Cidade"
          OnChange={(e) => {
            handleChange(e);
          }}
          Value={newClient.Cidade}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          {isLoading ? <Spinner size={25} /> : null}
          <StyledCreateButton onClick={Create}>
            Criar novo Cliente
          </StyledCreateButton>
        </div>
      </div>
    </StyledInputDiv>
  );
}

export default CreateClient;
