import React from "react";

import Button from "./Button";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "./table";

function TerminalTable({ data, onRemove }) {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr className="thead">
            <Th width="30%">Название</Th>
            <Th>Описание</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map(({ id, title, desc }) => (
            <Tr key={id}>
              <Td>{title}</Td>
              <Td>{desc}</Td>
              <Td width="10%">
                <Button onClick={() => onRemove(id)}>Удалить</Button>
              </Td>
            </Tr>
          ))}
          {!data.length && (
              <Tr>
                <Td style={{ textAlign: "center" }} colSpan="5">
                  Нет терминалов
                </Td>
              </Tr>
            )}
        </Tbody>
      </Table>
    </TableContainer>
    
  );
}

export default TerminalTable;
