import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";

import Field from "./Field";
import Button from "./Button";

const ButtonContainer = styled.div`
  margin-top: 22px;
  @media (max-width: 991px) {
    margin: 23px 0px 0px 0px
  }
  @media (max-width: 768px) {
    margin: 0px 0px 35px 0px
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Заполните это поле";
  }

  if (!values.desc) {
    errors.desc = "Заполните это поле";
  }

  return errors;
}

function TerminalForm({ onSubmit }) {
  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      title: "",
      desc: "",
    },
    validate,
    onSubmit,
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        label="Название терминала"
        type="text"
        name="title"
        value={values.title}
        error={errors.title}
        onChange={handleChange}
        autoComplete="off"
      />
      <Field
        label="Описание"
        type="text"
        name="desc"
        value={values.desc}
        error={errors.desc}
        onChange={handleChange}
        autoComplete="off"
      />
      <ButtonContainer>
        <Button type="submit">Добавить терминал</Button>
      </ButtonContainer>
    </Form>
  );
}

export default TerminalForm;
