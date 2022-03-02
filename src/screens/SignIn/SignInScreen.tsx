import React, { useEffect, useState } from 'react';
import { StyledMainDiv, StyledModal, StyledTitle } from './StyledSignInScreen';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleLogin } from '@Config/api/api';
import { useHistory } from 'react-router-dom';
import { Spinner } from 'react-activity';
import { LoginValidation } from '@Components/LoginValidation/LoginValidation';
import Character from '@Assets/Character.svg';

function SignInScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('@storage_Key');
    if (token) {
      history.push('/Clients');
    }
  }, []);

  async function handleVerifyUser(email: string, password: string) {
    setIsLoading(true);
    await handleLogin(email, password);
    setIsLoading(false);

    const token = localStorage.getItem('@storage_Key');
    if (token) {
      history.push('/Clients');
    }

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
        <img
          src={Character}
          alt="Ícone de uma mulher com um notebook na mão apontando do formulário de login"
          style={{ width: 500 }}
        />
      </div>
    </StyledMainDiv>
  );
}

export default SignInScreen;
