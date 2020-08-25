import React from "react";
import styled from "styled-components";


const Input = styled.input`
  width: 300px;
  height: 30px;
  padding: 0 10px;
  color: ${(props) => props.inputColor || "#000"};
  background: #f8f8f8;
  border: 1px solid lightgrey;
  outline: 0;
  @media (max-width: 991px) {
    width: 220px;
  }
  @media (max-width: 768px) {
    width: calc(100% - 20px);
    height: 45px;
    font-size: 20px;
  }
`;

const FieldContainer = styled.div`
  width: 322px;
  height: 90px;
  @media (max-width: 991px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    height: 115px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  @media (max-width: 768px) {
font-size: 25px;
  }
`;

const Error = styled.div`
  font-size: 12px;
  color: red;
  padding-top: 10px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export default function Field({ label, error, ...props }) {
  return (
    <FieldContainer>
      <Label>{label}</Label>
      <Input {...props} />
      {error && <Error>{error}</Error>}
    </FieldContainer>
  );
}
