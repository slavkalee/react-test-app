import React from "react";
import styled from "styled-components";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import LoginForm from "../components/LoginForm";
import { setUser } from '../redux/actions/user'

const Container = styled.div`
  background: linear-gradient(
    45deg,
    #0a0a14 20%,
    #0D3B48 100%
  );
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  background: #fff;
  box-shadow: 0px 2px 80px -20px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 550px;
  }
`;

const LoginTitleContainer = styled.div`
  border-bottom: 1px solid lightgrey;
  padding: 15px 0;
`;

const LoginTitle = styled.h1`
  text-align: center;
  margin: 0;
  font-weight: 50;
`;

const LoginBodyContainer = styled.div`
  padding: 30px;
`;

export default function Index() {
  const dispatch = useDispatch();
  const history = useHistory();

  const login = (values) => {
    axios
      .get(`https://api.github.com/users/${values.username}`)
      
      .then(function (response) {
        dispatch(setUser(response.data));
        history.push('/terminals');
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  };

  return (
    <Container>
      <LoginContainer>
        <LoginTitleContainer>
          <LoginTitle>Авторизация</LoginTitle>
        </LoginTitleContainer>
        <LoginBodyContainer>
          <LoginForm onSubmit={login} />
        </LoginBodyContainer>
      </LoginContainer>
    </Container>
  );
}
