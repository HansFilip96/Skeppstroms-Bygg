import React from "react";
import ReactDom from "react-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/contextProvider";
import { config } from "./config";

const CLIENTID = config.MY_CLIENTID_TOKEN;
const CLIENTSECRET = config.SECRET_API_KEY;

ReactDom.render(
  <ContextProvider>
    <GoogleOAuthProvider clientId={CLIENTID} clientSecret={CLIENTSECRET}>
      <App />
    </GoogleOAuthProvider>
  </ContextProvider>,
  document.getElementById("root")
);
