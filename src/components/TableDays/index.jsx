import React, { useContext } from "react";
import { GlobalContext } from "../../providers/indexContext";
import { Container, Table, Td, Th } from "./style";

const TableDaysContainer = () => {
  const { data, headers } = useContext(GlobalContext);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <Th key={index}>{header}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {row.map((cell, index) => (
                <Td key={index}>{cell}</Td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableDaysContainer;
