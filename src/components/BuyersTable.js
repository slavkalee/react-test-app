import React, { useState, useMemo, useCallback } from "react";
import styled from "styled-components";

import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "./table";
import PageButton from "./PageButton";
import { NavLink } from "react-router-dom";
import Arrow from "./table/Arrow";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const PageContainer = styled.div``;

const Select = styled.select`
  padding: 8px 0px 8px 10px;
  color: #fff;
  background: #24344b;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 10px 0px 10px 10px;
  }
`;

const Option = styled.option`
  color: #000;
  background: rgb(233, 228, 228);
`;

const Link = styled(NavLink)`
  color: #000;
`;

function BuyersTable({ data, limits }) {
  const [sortKey, setSortKey] = useState(null);
  const [isAsc, toggleOrder] = useState(true);
  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSort = (columnName) => {
    toggleOrder(!isAsc);
    setSortKey(columnName);
  };

  const handleChangeLimit = (e) => {
    setCurrentPage(1);
    setLimit(e.target.value);
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const sort = useCallback((a, b) => isAsc ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey], [isAsc, sortKey]);

  const pageCount = useMemo(() => Math.ceil(data.length / limit), [
    data.length,
    limit,
  ]);

  const offset = useMemo(() => currentPage * limit, [currentPage, limit]);
  const start = useMemo(() => (currentPage - 1) * limit, [currentPage, limit]);

  const displayData = useMemo(() => data.slice(start, offset).sort(sort), [
    data,
    start,
    offset,
    sort
  ]);

  return (
    <>
      <TableContainer>
        <Table>
          <Thead>
            <Tr className="thead">
              <Th>ID</Th>
              <Th width="35%">Имя</Th>
              <Th onClick={() => handleSort("avgCheck")}>
                Средний чек
                <Arrow />
              </Th>
              <Th onClick={() => handleSort("count")}>
                Кол-во покупок
                <Arrow />
              </Th>
              <Th onClick={() => handleSort("totalPrice")}>
                Общая выручка
                <Arrow />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {displayData.map(({ id, name, avgCheck, count, totalPrice }) => (
              <Tr key={`table_row_${id}`}>
                <Td width="5%">
                  <Link to={`/buyers/${id}`}>{id}</Link>
                </Td>
                <Td>{name}</Td>
                <Td>{avgCheck} $</Td>
                <Td>{count}</Td>
                <Td>{totalPrice} $</Td>
              </Tr>
            ))}

            {!data.length && (
              <Tr>
                <Td style={{ textAlign: "center" }} colSpan="5">
                  Нет результатов
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
      <Container>
        {!!data.length && (
          <Select onChange={handleChangeLimit}>
            {limits.map((limit) => (
              <Option key={`limit_option_${limit}`} value={limit}>
                {data.length < limit ? data.length : limit} из {data.length}
              </Option>
            ))}
          </Select>
        )}

        <PageContainer>
          {[...Array(pageCount)].map((page, index) => {
            const pageNumber = index + 1;
            return (
              <PageButton
                key={pageNumber}
                active={pageNumber === currentPage}
                onClick={() => changePage(pageNumber)}
              >
                {pageNumber}
              </PageButton>
            );
          })}
        </PageContainer>
      </Container>
    </>
  );
}

export default BuyersTable;
