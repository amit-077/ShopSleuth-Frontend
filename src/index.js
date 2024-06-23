import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./components/Context/Context";

ReactDOM.render(
  <ChakraProvider>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
