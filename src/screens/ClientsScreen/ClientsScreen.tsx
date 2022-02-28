import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledInputDiv, StyledMainDiv } from './StyledClientScreen';

import { handleGetClients } from '@Config/api/api';

import { Dots } from 'react-activity';
import 'react-activity/dist/library.css';
import ClientsTable from 'src/components/ClientsTable/ClientsTable';
import { ClientValidation } from 'src/components/ClientValidation/ClientValidation';
import CustomButton from 'src/components/CustomButton/CustomButton';

interface IClient {
  nome: string;
  cpf: string;
  email: string;
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
}

function ClientsScreen({ setIsLoggedIn }: any) {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [clients, setClients] = useState<IClient[]>([]);

  function handleLogout() {
    localStorage.removeItem('@storage_Key');
    setIsLoggedIn(false);
    navigate('/');
  }

  useEffect(() => {
    async function getClients() {
      const allClients = await handleGetClients();
      if (allClients) {
        setClients(allClients);
      }
      setIsLoading(false);
    }
    getClients();
  }, []);

  return (
    <StyledMainDiv>
      <div
        style={{
          display: 'flex',
          flex: 1,
          width: '100%',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'space-between',
          }}
        >
          {clients?.length > 0 ? (
            <CustomButton onClick={() => setShowModal(!showModal)}>
              Criar Cliente
            </CustomButton>
          ) : (
            <div />
          )}

          <CustomButton onClick={handleLogout}>LOGOUT</CustomButton>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          {isLoading ? (
            <Dots color="black" size={50} />
          ) : (
            <>
              {clients?.length > 0 && showModal === false ? (
                <div
                  style={{
                    display: 'flex',
                    flex: 1,
                    height: '100%',
                  }}
                >
                  <ClientsTable />
                </div>
              ) : (
                <ClientValidation
                  setClients={setClients}
                  setShowModal={setShowModal}
                />
              )}
            </>
          )}
        </div>
      </div>
    </StyledMainDiv>
  );
}

export default ClientsScreen;
