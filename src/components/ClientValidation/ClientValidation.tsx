import React, { useRef, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  FormContainer,
  StyledButtonDiv,
  StyledInputDiv,
  StyledPersonalInfoDiv,
} from './StyledClientValidation';
import {
  handleCreateClient,
  handleGetCEP,
  handleUpdateClient,
} from '@Config/api/api';
import { toast, ToastContainer } from 'react-toastify';
import ReactInputMask from 'react-input-mask';
import { useHistory } from 'react-router-dom';
import { Spinner } from 'react-activity';
import 'react-activity/dist/library.css';

const SignupSchema = Yup.object().shape({
  nome: Yup.string().max(50, 'Muito grande!').required('Necessário'),
  email: Yup.string().email('Invalid email').required('Necessário'),

  cpf: Yup.string()
    .min(4, 'Muito pequeno!')
    .max(14, 'Muito grande!')
    .required('Necessário'),
  cep: Yup.string()
    .min(4, 'Muito pequeno!')
    .max(9, 'Muito grande!')
    .required('Necessário'),
  rua: Yup.string()
    .min(4, 'Muito pequeno!')
    .max(50, 'Muito grande!')
    .required('Necessário'),
  numero: Yup.string()
    .min(1, 'Muito pequeno!')
    .max(10, 'Muito grande!')
    .required('Necessário'),
  bairro: Yup.string().max(50, 'Muito grande!').required('Necessário'),
  cidade: Yup.string().required('Necessário'),
});

export function ClientValidation({ client }: any) {
  const [isLoading, setIsLoading] = useState<any>(false);

  const history = useHistory();
  const focusRef = useRef<any>(null);

  async function onBlurCep(e: any, setFieldValue: any) {
    const { value } = e.target;
    const newCEPNumbers = value.replace(/-|_/g, '');
    if (newCEPNumbers?.length !== 8) {
      toast.error('O CEP não existe!', {
        position: 'top-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const newCEP = await handleGetCEP(newCEPNumbers);

    setFieldValue('rua', newCEP.logradouro);
    setFieldValue('bairro', newCEP.bairro);
    setFieldValue('cidade', newCEP.localidade);

    focusRef.current.focus();
  }

  async function updateClient(Client: any) {
    await handleUpdateClient(client.id, Client);
    history.push('/Clients');
  }

  return (
    <FormContainer>
      <Formik
        initialValues={{
          nome: `${client ? client.nome : ''}`,
          email: `${client ? client.email : ''}`,
          cpf: `${client ? client.cpf : ''}`,
          cep: `${client ? client.endereço.cep : ''}`,
          rua: `${client ? client.endereço.rua : ''}`,
          numero: `${client ? client.endereço.numero : ''}`,
          bairro: `${client ? client.endereço.bairro : ''}`,
          cidade: `${client ? client.endereço.cidade : ''}`,
        }}
        validationSchema={SignupSchema}
        onSubmit={async (Client) => {
          setIsLoading(true);
          {
            client
              ? await updateClient(Client)
              : await handleCreateClient(Client);
          }
          setIsLoading(false);

          history.go(0);
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <ToastContainer
              position="top-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              closeButton={false}
            />

            <h1>Informações Pessoais</h1>
            <StyledPersonalInfoDiv>
              <div>
                <Field name="nome" placeholder="Nome" id="name_field" />
                {errors.nome && touched.nome ? <div>{errors.nome}</div> : null}
              </div>
              <StyledInputDiv>
                <Field name="email" placeholder="Email" />

                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </StyledInputDiv>
            </StyledPersonalInfoDiv>

            <Field
              name="cpf"
              render={({ field }: any) => (
                <>
                  <ReactInputMask
                    {...field}
                    mask="999.999.999-99"
                    placeholder="CPF"
                    type="text"
                  />
                  {errors.cpf && touched.cpf ? <div>{errors.cpf}</div> : null}
                </>
              )}
            />
            <h1 style={{ paddingTop: 40 }}>Endereço</h1>
            <div
              style={{
                display: 'flex',
                flex: 1,
                flexWrap: 'wrap',
              }}
            >
              <Field
                name="cep"
                render={({ field }: any) => (
                  <>
                    <ReactInputMask
                      {...field}
                      mask="99999-999"
                      placeholder="CEP"
                      type="text"
                      onBlur={(e: any) => {
                        onBlurCep(e, setFieldValue);
                      }}
                    />
                    {errors.cep && touched.cep ? <div>{errors.cep}</div> : null}
                  </>
                )}
              />

              <StyledInputDiv>
                <Field name="rua" placeholder="Rua" />

                {errors.rua && touched.rua ? <div>{errors.rua}</div> : null}
              </StyledInputDiv>
              <StyledInputDiv>
                <Field name="numero" placeholder="Numero" innerRef={focusRef} />

                {errors.numero && touched.numero ? (
                  <div>{errors.numero}</div>
                ) : null}
              </StyledInputDiv>
              <div>
                <Field name="bairro" placeholder="Bairro" />

                {errors.bairro && touched.bairro ? (
                  <div>{errors.bairro}</div>
                ) : null}
              </div>

              <StyledInputDiv>
                <Field name="cidade" placeholder="Cidade" />

                {errors.cidade && touched.cidade ? (
                  <div>{errors.cidade}</div>
                ) : null}
              </StyledInputDiv>
            </div>
            <StyledButtonDiv>
              {client ? (
                <>
                  {isLoading ? (
                    <Spinner size={25} />
                  ) : (
                    <button type="submit">Atualizar Cliente</button>
                  )}
                </>
              ) : (
                <>
                  {isLoading ? (
                    <Spinner size={25} />
                  ) : (
                    <button type="submit">Criar novo Cliente</button>
                  )}
                </>
              )}
            </StyledButtonDiv>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}
