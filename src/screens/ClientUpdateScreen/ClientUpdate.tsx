import React from 'react';
import { StyledMainDiv } from './StyledClientUpdate';
import { useLocation } from 'react-router-dom';
import Header from '@Components/Header/Header';
import { ClientValidation } from '@Components/ClientValidation/ClientValidation';

function ClientUpdate({ setIsLoggedIn }: any) {
  const location = useLocation();
  const { state } = location;

  return (
    <StyledMainDiv>
      <Header setIsLoggedIn={setIsLoggedIn} />
      <ClientValidation client={state} />
    </StyledMainDiv>
  );
}

export default ClientUpdate;
