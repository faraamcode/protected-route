import React from "react";
import { Route, useHistory } from "react-router-dom";
import auth from "./auth";
export const LandingPage = () => {
  const history = useHistory();
  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(() => {
      console.log(auth.isLoggedIn);
      history.push("/dashboard");
    });
  };
  return (
    <div>
      <h4>Landing page</h4>
      <button onClick={handleLogin}>login </button>
    </div>
  );
};
