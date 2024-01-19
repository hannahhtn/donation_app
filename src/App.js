/** @format */

import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Form from "./Form";
import TableData from "./Table";
import { useState } from "react";

function App() {
  const [donorsList, setdonorsList] = useState([]);

  function handleClick(values) {
    let list = donorsList.concat([values]);
    setdonorsList(list);
  }
  return (
    <ChakraProvider>
      <div className="App">
        <Form handleClick={handleClick} />
        <TableData donorsList={donorsList} />
      </div>
    </ChakraProvider>
  );
}

export default App;
