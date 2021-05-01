import React from "react";
import { Route, useHistory } from "react-router-dom";
import auth from "./auth";
export const Dashboard = () => {
  const history = useHistory();
  const logout = (e) => {
    e.preventDefault();
    auth.logout(() => {
      history.push("/");
    });
  };
  return (
    <div>
      <h4>My dashboard</h4>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
