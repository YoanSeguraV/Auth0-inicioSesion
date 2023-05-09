import React from "react";
import "./App.css"
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty'
import "react-json-pretty/themes/monikai.css"
function Profile() {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="app">
        <h1>Aplication</h1>

        {/* <p>{JSON.stringify(user) }</p> */}
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
        <JSONPretty data={user}>

        </JSONPretty>
      </div>
    )
  );
}

export default Profile;
