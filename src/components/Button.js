import styled from "styled-components";

export default styled.button`
  background: #24344b;
  color: #fff;
  outline: 0;
  border: 0;
  padding: 12px 20px;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 1px;
  border: 1px solid transparent;
  cursor: pointer;
  white-space: nowrap;
  transition: 0.5s;
  &:hover {
    background: transparent;
    border: 1px solid #24344b;
    color: #24344b;
  }
  @media (max-width: 991px) {
    padding: 10px 15px;  
    font-size: 8px;
  }
  @media (max-width: 768px) {
    padding: 15px 25px;  
    font-size: 15px;
  }
`;
