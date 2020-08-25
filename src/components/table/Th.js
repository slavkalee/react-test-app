import styled from "styled-components";

const Th = styled.th`
  text-align: start;
  padding: 10px 15px;
  color: #fff;
  font-weight: normal;
  white-space: nowrap;
  cursor: pointer;
  @media (max-width: 768px) {
    white-space: normal;
  }
`;

export default Th;
