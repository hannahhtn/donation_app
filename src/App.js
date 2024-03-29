/** @format */

import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Form from "./Form";
import TableData from "./Table";
import { useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { DeleteIcon } from "@chakra-ui/icons";


function App() {
  const [donorsList, setdonorsList] = useState([]);

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("name", {
      cell: (info) => info.getValue(),
      header: "Donor's name",
    }),
    columnHelper.accessor("donationType", {
      cell: (info) => info.getValue(),
      header: "Type of donation",
    }),
    columnHelper.accessor("amount", {
      cell: (info) => info.getValue(),
      header: "Amount",
      meta: {
        isNumeric: true,
      },
    }),
    columnHelper.accessor("date", {
      cell: (info) => info.getValue(),
      header: "Date",
    }),
    columnHelper.accessor("icon", {
      cell: (info) => (
        <DeleteIcon
          onClick={() => {
            let temp = [...donorsList];
            temp.splice(info.row.index, 1);
            setdonorsList(temp);
          }}
        ></DeleteIcon>
      ),
      header: "Delete",
    }),
  ];

  function handleClick(values) {
    let list = donorsList.concat([values]);
    setdonorsList(list);
  }

  return (
    <ChakraProvider>
      <div className="App">
        <Form handleClick={handleClick} />
        <TableData data={donorsList} columns={columns} />
      </div>
    </ChakraProvider>
  );
}
export default App;