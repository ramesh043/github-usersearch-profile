import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
// m1WvrpBvEgH3ElKg3OIIVECdpJI8yf8p
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-qplmqw0x8coknzp2.us.auth0.com"
      clientId="kiqZQQiFSv6NHZXsnXFKE2o1tZAmI3HG"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);
