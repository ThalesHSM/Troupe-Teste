import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FormContainer, StyledButton } from './StyledLoginValidation';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required(),
  password: Yup.string().required(),
});

const TextInput = (props: any) => {
  const { field, type } = props;

  return <input {...field} type={type} placeholder={field.name} />;
};

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
          <Field name="email" placeholder="Email" />

          {errors.email && touched.email ? <div>{errors.email}</div> : null}

          <Field
            name="password"
            type="password"
            placeholder="Password"
            component={TextInput}
          />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <StyledButton type="submit">Login</StyledButton>
        </Form>
      )}
    </Formik>
  </FormContainer>
);
