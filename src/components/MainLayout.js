import React from "react";
import styled from "styled-components";

import Sidebar from "./Sidebar";

const Container = styled.div`
  /* overflow: hidden; */
`;

const Main = styled.main`
  margin-left: 240px;
  padding: 40px;
  width: 47%;
  @media (max-width: 991px) {
    margin-left: 165px;
    width: 70%;
  }
  @media (max-width: 768px) {
    margin-left: 185px;
    width: calc(100% - 225px);
    padding: 20px;
  }
  @media (max-width: 367px) {
    margin-left: 185px;
    width: 70%;
    padding: 20px;
  }
`;

function MainLayout({ children }) {
  return (
    <Container>
      <Sidebar />
      <Main>{children}</Main>
    </Container>
  );
}

export default MainLayout;
