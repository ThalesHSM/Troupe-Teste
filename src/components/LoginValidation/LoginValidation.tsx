import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FormContainer } from './StyledLoginValidation';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required(),
  password: Yup.string().required(),
});

export const LoginValidation = ({ handleVerifyUser }: any) => (
  <FormContainer>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        handleVerifyUser(values.email, values.password);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="email" placeHolder="Email" />

          {errors.email && touched.email ? <div>{errors.email}</div> : null}

          <Field name="password" type="password" placeHolder="Password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  </FormContainer>
);
