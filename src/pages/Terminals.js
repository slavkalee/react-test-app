import React from "react";
import styled from "styled-components";

import TerminalForm from "../components/TerminalForm";
import TerminalTable from "../components/TerminalTable";
import Title from '../components/Title'
import { useSelector, useDispatch } from "react-redux";
import { removeTerminal, addTerminal } from "../redux/actions/terminal";

const TerminalContainer = styled.div``;



export default function Terminals() {
  const terminals = useSelector((state) => state.terminals);
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(removeTerminal(id));
  };

  const add = ({ title, desc }, { resetForm }) => {
    dispatch(addTerminal(title, desc));
    resetForm();
  };

  return (
    <TerminalContainer>
      <Title>Терминалы</Title>
      <TerminalForm onSubmit={add} />
      <TerminalTable data={terminals} onRemove={remove} />
    </TerminalContainer>
  );
}
