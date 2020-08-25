import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Title from "../components/Title";
import { useSelector } from "react-redux";
import { findById } from "../utils";

const List = styled.ul`
    margin-top: 50px;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
`;

export default function Buyer() {
  const { id } = useParams();

  const buyer = useSelector((state) => {
    return findById(state.buyers, id);
  });
  return (
    <>
      <Title>Информация о покупателе</Title>
      <List>
        <ListItem>ID покупателя : {buyer.id}</ListItem>
        <ListItem>Имя покупателя : {buyer.name}</ListItem>
        <ListItem>Средний чек : {buyer.avgCheck} $</ListItem>
        <ListItem>Количество покупок : {buyer.count}</ListItem>
        <ListItem>Общая выручка : {buyer.totalPrice} $</ListItem>
      </List>
    </>
  );
}
