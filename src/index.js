import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-l82g2rch07684g1f.us.auth0.com"
    clientId="xj6z8tKDAvLXLxAmNebijlXSRzalAMcJ"
    authorizationParams={{
      redirect_uri: /*window.location.origin*/ "http://localhost:3000/",
    }}
  >
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Auth0Provider>
);
