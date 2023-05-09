import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
// const Domain=dev-10grmzo45c5ydpoo.us.auth0.com;
// const clientId=15YOAgXomVOXShxhBIMwKZLfQL5sYiv1

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-10grmzo45c5ydpoo.us.auth0.com"
    clientId="15YOAgXomVOXShxhBIMwKZLfQL5sYiv1"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
