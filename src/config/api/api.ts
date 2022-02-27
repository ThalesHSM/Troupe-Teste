import axios from 'axios';

const USER_URL = 'http://localhost:5000/usuarios';
const CLIENTS_URL = 'http://localhost:5000/clientes';

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

async function handleCreateClient(Client: IClient) {
  const { CEP, Rua, Número, Bairro, Cidade } = Client;

  const { Nome, Email, CPF } = Client;

  const endereço = { CEP, Rua, Número, Bairro, Cidade };

  try {
    await axios.post(
      CLIENTS_URL,
      { Nome, Email, CPF, endereço },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
  } catch (error) {
    console.log(error);
  }
}

async function handleGetClients() {
  try {
    const response = await axios.get(CLIENTS_URL).then((resp) => {
      return resp.data;
    });
    return response;
  } catch (error) {}
}

async function handleLogin(email: string, password: string) {
  await axios
    .get(USER_URL)
    .then((resp) => {
      resp.data.forEach((e: any) => {
        if (e.email === email && e.password === password) {
          localStorage.setItem('@storage_Key', e.token);
        }
      });
    })
    .catch((error) => {
      console.log(error, '@storage_Key');
    });
}

async function handleGetCEP(CEP: string) {
  const response = await axios.get(`https://viacep.com.br/ws/${CEP}/json`);
  return response.data;
}

export { handleCreateClient, handleLogin, handleGetClients, handleGetCEP };
