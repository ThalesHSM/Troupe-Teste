import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FormContainer } from './StyledClientValidation';
import {
  handleCreateClient,
  handleGetCEP,
  handleGetClients,
} from '@Config/api/api';
import { toast, ToastContainer } from 'react-toastify';
import ReactInputMask from 'react-input-mask';

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

export function ClientValidation({ setClients, setShowModal }: any) {
  const [isLoading, setIsLoading] = useState<any>(false);

  async function onBlurCep(e: any, setFieldValue: any) {
    const { value } = e.target;

    const newCEPNumbers = value.replace(/-|_/g, '');
    console.log(newCEPNumbers);
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
  }
  return (
    <FormContainer>
      <Formik
        initialValues={{
          nome: '',
          email: '',
          cpf: '',
          cep: '',
          rua: '',
          numero: '',
          bairro: '',
          cidade: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={async (Client) => {
          setIsLoading(true);

          await handleCreateClient(Client);
          const newClients = await handleGetClients();
          setIsLoading(false);
          setClients(newClients);
          setShowModal(false);
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
            <div
              style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
              }}
            >
              <h1>Informações Pessoais</h1>
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                }}
              >
                <div>
                  <Field name="nome" placeHolder="Nome" />
                  {errors.nome && touched.nome ? (
                    <div>{errors.nome}</div>
                  ) : null}
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: 100,
                  }}
                >
                  <Field name="email" placeHolder="Email" />

                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </div>
              </div>
            </div>

            <Field
              name="cpf"
              render={({ field }: any) => (
                <>
                  <ReactInputMask
                    {...field}
                    mask="999.999.999-99"
                    placeHolder="CPF"
                    type="text"
                  />
                  {errors.cpf && touched.cpf ? <div>{errors.cpf}</div> : null}
                </>
              )}
            />
            <h1>Endereço</h1>
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
                      placeHolder="CEP"
                      type="text"
                      onBlur={(e: any) => {
                        onBlurCep(e, setFieldValue);
                      }}
                    />
                    {errors.cep && touched.cep ? <div>{errors.cep}</div> : null}
                  </>
                )}
              />

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: 100,
                }}
              >
                <Field name="rua" placeHolder="Rua" />

                {errors.rua && touched.rua ? <div>{errors.rua}</div> : null}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',

                  marginLeft: 100,
                }}
              >
                <Field name="numero" placeHolder="Numero" />

                {errors.numero && touched.numero ? (
                  <div>{errors.numero}</div>
                ) : null}
              </div>
              <div>
                <Field name="bairro" placeHolder="Bairro" />

                {errors.bairro && touched.bairro ? (
                  <div>{errors.bairro}</div>
                ) : null}
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',

                  marginLeft: 100,
                }}
              >
                <Field name="cidade" placeHolder="Cidade" />

                {errors.cidade && touched.cidade ? (
                  <div>{errors.cidade}</div>
                ) : null}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 50,
                marginRight: 130,
              }}
            >
              {isLoading ? <Spinner size={25} /> : <div />}
              <button type="submit">Criar novo cliente</button>
            </div>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}
