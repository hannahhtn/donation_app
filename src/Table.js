/** @format */

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const TableData = ({ donorsList }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Donation table data</TableCaption>
        <Thead>
          <Tr>
            <Th>Donor's name</Th>
            <Th>Type of donation</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {donorsList.map((donor) => {
            return (
              <Tr key={donor.id}>
                <Td>{donor.name}</Td>
                <Td>{donor.donationType}</Td>
                <Td>{donor.date}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
