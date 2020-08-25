import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: inline-block;
    position: relative;
`;

const Svg = styled.svg`
    display: block;
`;

function Arrow() {
  return (
    <Container>
      <Svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 14.5L12 9.5L17 14.5H7Z" fill="white" />
      </Svg>
      <Svg
        className="arrow-down"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="white" />
      </Svg>
    </Container>
  );
}

export default Arrow;
