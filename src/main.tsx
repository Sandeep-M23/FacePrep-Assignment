import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from "./context/Auth/AuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthContextProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </AuthContextProvider>
);
