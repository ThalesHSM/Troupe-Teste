import React, { useEffect, useState } from 'react';
import { StyledMainDiv, StyledModal, StyledTitle } from './StyledHomeScreen';
import { toast, ToastContainer } from 'react-toastify';
import { handleLogin } from '@Config/api/api';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-activity';

import { LoginValidation } from '@Components/LoginValidation/LoginValidation';
import Character from '@Assets/Character.svg';

function HomeScreen({ setIsLoggedIn }: any) {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const citiesJSON = localStorage.getItem('@storage_Key');
    if (citiesJSON) {
      setIsLoggedIn(true);
      navigate('/Clients');
    }
  }, []);

  async function handleVerifyUser(email: string, password: string) {
    setIsLoading(true);
    await handleLogin(email, password);

    setIsLoading(false);

    const citiesJSON = localStorage.getItem('@storage_Key');
    if (!citiesJSON) {
      return toast.error('Verifique se colocou as informações corretas!', {
        position: 'top-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setIsLoggedIn(true);

    navigate('/Clients');
  }

  return (
    <StyledMainDiv>
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
      <StyledTitle>TROUPE</StyledTitle>
      <div
        style={{
          border: '2px solid #f7f7f7',
          borderRadius: 20,
          display: 'flex',
        }}
      >
        <StyledModal>
          <LoginValidation handleVerifyUser={handleVerifyUser} />
          {isLoading ? <Spinner /> : <div style={{ height: 24 }} />}
        </StyledModal>
        <img src={Character} alt="" style={{ width: 500 }} />
      </div>
    </StyledMainDiv>
  );
}

export default HomeScreen;
