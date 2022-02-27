import React, { useEffect, useState } from 'react';
import {
  StyledLoginButton,
  StyledMainDiv,
  StyledShowPasswordButton,
} from './StyledHomeScreen';
import validator from 'validator';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleLogin } from '@Config/api/api';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-activity';
import 'react-activity/dist/library.css';
import Input from 'src/components/Input/Input';

interface IUser {
  Email: string;
  Password: string;
}

function HomeScreen({ setIsLoggedIn }: any) {
  const [user, setUser] = useState<IUser>({ Email: '', Password: '' });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const citiesJSON = localStorage.getItem('@storage_Key');
    if (citiesJSON) {
      setIsLoggedIn(true);
      navigate('/Clients');
    }
  }, []);

  async function handleVerifyUser() {
    if (!validator.isEmail(user.Email)) {
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
    if (user.Password.length < 4) {
      toast.error('A senha deve ter mais do que 4 caracteres!', {
        position: 'top-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setIsLoading(true);
      await handleLogin(user.Email, user.Password);
      setIsLoading(false);
      setIsLoggedIn(true);
      navigate('/Clients');
    }
  }

  function handleChange(e: any) {
    const { value } = e.target;
    const { placeholder } = e.target;
    setUser({
      ...user,
      [placeholder]: value,
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
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          width: '25vw',
          height: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <div>
          <h2>Email</h2>
          <Input
            Type="email"
            OnChange={(e) => {
              handleChange(e);
            }}
            PlaceHolder="Email"
            Value={user.Email}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>Password</h2>
          <Input
            Type={showPassword ? 'text' : 'password'}
            OnChange={(e) => {
              handleChange(e);
            }}
            PlaceHolder="Password"
            Value={user.Password}
          />
          <div style={{ display: 'flex' }}>
            <p>Show Password</p>
            <StyledShowPasswordButton
              showPassword={showPassword}
              style={{}}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>
        {isLoading ? <Spinner /> : null}
        <StyledLoginButton onClick={handleVerifyUser}>Login</StyledLoginButton>
      </div>
    </StyledMainDiv>
  );
}

export default HomeScreen;
