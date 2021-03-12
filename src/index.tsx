import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
