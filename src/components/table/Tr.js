import styled from "styled-components";

const Tr = styled.tr`
    transition: 0.4s;
    &:hover:not(.thead) {
        background: rgb(207, 202, 202);
    }
`;

export default Tr;
