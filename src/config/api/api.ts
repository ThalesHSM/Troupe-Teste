import axios from 'axios';

const USER_URL = 'http://localhost:5000/usuarios';
const CLIENTS_URL = 'http://localhost:5000/clientes';

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

async function handleCreateClient(Client: IClient) {
  const { nome, email, cpf } = Client;
  const { cep, rua, numero, bairro, cidade } = Client;

  const endereço = { cep, rua, numero, bairro, cidade };

  try {
    await axios.post(
      CLIENTS_URL,
      { nome, email, cpf, endereço },
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
  } catch (error) {
    console.log(error);
  }
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

async function handleUpdateClient(id: string, Client: IClient) {
  const { nome, email, cpf } = Client;
  const { cep, rua, numero, bairro, cidade } = Client;

  const endereço = { cep, rua, numero, bairro, cidade };

  try {
    await axios.patch(
      `http://localhost:5000/clientes/${id}`,
      { id, nome, email, cpf, endereço },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
  } catch (error) {
    console.log(error);
  }
}

async function handleDeleteClient(id: string) {
  await axios.delete(`http://localhost:5000/clientes/${id}`);
}

async function handleGetCEP(CEP: string) {
  const response = await axios.get(`https://viacep.com.br/ws/${CEP}/json`);
  return response.data;
}

export {
  handleCreateClient,
  handleLogin,
  handleGetClients,
  handleDeleteClient,
  handleUpdateClient,
  handleGetCEP,
};
