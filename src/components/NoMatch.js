import React from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

import Button from "./Button";

const Container = styled.div``;

const Title = styled.h1`
  font-size: 50px;
`;

const Text = styled.span`
  font-size: 20px;
`;

const BtnLink = styled(Link)`
  display: block;
  margin-top: 30px;
`;

function NoMatch() {
  let location = useLocation();
  return (
    <Container>
      <Title>404 Page Not Found</Title>
      <Text>
        No match for <code>{location.pathname}</code>
      </Text>
      <BtnLink to="/terminals">
        <Button>Вернуться домой</Button>
      </BtnLink>
    </Container>
  );
}

export default NoMatch;
