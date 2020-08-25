import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";

import Field from "./Field";
import Button from "./Button";

const Form = styled.form`
  
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

function validate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = "Заполните это поле";
  }

  if (!values.password) {
    errors.password = "Заполните это поле";
  } else if (!/^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$/.test(values.password)) {
    errors.password =
      "Пароль должен быть не менее 8 символов, содержать 1 прописную букву и 1 цифру";
  }

  return errors;
}

function LoginForm({ onSubmit }) {
  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      username: "slavkalee",
      password: "eeeEeeee1",
    },
    validate,
    onSubmit,
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        label="Логин"
        type="text"
        name="username"
        value={values.username}
        error={errors.username}
        onChange={handleChange}
      />

      <Field
        label="Пароль"
        type="password"
        name="password"
        value={values.password}
        error={errors.password}
        onChange={handleChange}
      />
      <ButtonContainer>
        <Button className="waves-effect waves-light" type="submit">Вход</Button>
      </ButtonContainer>
    </Form>
  );
}

export default LoginForm;
