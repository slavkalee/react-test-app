import styled from 'styled-components'

export default styled.button`
    font-family: 'Rubik';
    border: none;
    outline: 0;
    cursor: pointer;
    padding: 3px 8px;
    background: ${props => props.active ? "#24344B" : "transparent"};
    color: ${props => props.active ? "#fff" : "#000"};
    font-size: 15px;
    font-weight: 600;
    border-radius: 5px;
    @media (max-width: 768px) {
        font-size: 20px;
        padding: 3px 10px;
  }
`;

