import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {
  StyledCreateButton,
  StyledHeaderDiv,
  StyledLogoutButton,
} from './StyledHeader';

function Header({ showClientInfo, handleShowClientInfo, clients }: any) {
  const history = useHistory();

  function handleLogout() {
    localStorage.removeItem('@storage_Key');
    history.push('/');
  }

  return (
    <StyledHeaderDiv>
      <StyledLogoutButton onClick={handleLogout}>LOGOUT</StyledLogoutButton>
      {clients?.length > 0 && handleShowClientInfo ? (
        <StyledCreateButton onClick={handleShowClientInfo}>
          {showClientInfo ? <p>Criar Cliente</p> : <p>Voltar</p>}
        </StyledCreateButton>
      ) : null}
    </StyledHeaderDiv>
  );
}

export default Header;
