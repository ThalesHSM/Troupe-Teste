import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledLogoutButton, StyledMainDiv } from './StyledClientScreen';
import CreateClient from 'src/components/CreateClient/CreateClient';
import { handleGetClients } from '@Config/api/api';

import { Dots } from 'react-activity';
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
  function createNewClient() {
    setShowModal(!showModal);
  }

  return (
    <StyledMainDiv>
      <div
        style={{
          display: 'flex',
          flex: 1,
          width: '100%',
          justifyContent: 'flex-end',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'space-between  ',
          }}
        >
          <StyledLogoutButton onClick={createNewClient}>
            Criar Cliente
          </StyledLogoutButton>
          <StyledLogoutButton onClick={handleLogout}>LOGOUT</StyledLogoutButton>
        </div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          {isLoading ? (
            <Dots color="white" size={50} />
          ) : (
            <>
              {clients?.length === 0 || showModal === true ? (
                <CreateClient setShowModal={setShowModal} />
              ) : (
                <div>
                  {clients.map((item) => (
                    <p>{item.Nome}</p>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </StyledMainDiv>
  );
}

export default ClientsScreen;
