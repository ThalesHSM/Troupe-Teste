import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import {
  StyledCreateButton,
  StyledHeaderDiv,
  StyledLogoutButton,
} from './StyledHeader';

function Header({ setIsLoggedIn, handleShowModal }: any) {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('@storage_Key');

    setIsLoggedIn(false);
    navigate('/');
  }

  return (
    <StyledHeaderDiv>
      <StyledLogoutButton onClick={handleLogout}>LOGOUT</StyledLogoutButton>

      {handleShowModal ? (
        <StyledCreateButton onClick={handleShowModal}>
          Criar Cliente
        </StyledCreateButton>
      ) : (
        <div
          style={{
            display: 'flex',
            width: '100%',
          }}
        >
          <AiOutlineArrowLeft
            size={50}
            style={{ marginLeft: 40, cursor: 'pointer' }}
            onClick={() => navigate(-1)}
          />
        </div>
      )}
    </StyledHeaderDiv>
  );
}

export default Header;
