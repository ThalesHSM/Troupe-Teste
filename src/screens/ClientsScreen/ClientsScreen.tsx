import React, { useEffect, useState } from 'react';
import { StyledHeaderDiv, StyledMainDiv } from './StyledClientScreen';

import { handleGetClients } from '@Config/api/api';

import { Levels } from 'react-activity';
import 'react-activity/dist/library.css';
import ClientsTable from '@Components/ClientsTable/ClientsTable';
import { ClientValidation } from '@Components/ClientValidation/ClientValidation';
import Header from '@Components/Header/Header';

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

function ClientsScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showClientInfo, setShowClientInfo] = useState<boolean>(true);
  const [clients, setClients] = useState<IClient[]>([]);

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

  function handleShowClientInfo() {
    setShowClientInfo(!showClientInfo);
  }

  return (
    <StyledMainDiv>
      <StyledHeaderDiv>
        <Header
          showClientInfo={showClientInfo}
          handleShowClientInfo={handleShowClientInfo}
          clients={clients}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          {isLoading ? (
            <Levels size={50} />
          ) : (
            <>
              {clients?.length > 0 && showClientInfo === true ? (
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
                <ClientValidation setClients={setClients} />
              )}
            </>
          )}
        </div>
      </StyledHeaderDiv>
    </StyledMainDiv>
  );
}

export default ClientsScreen;
