import React from "react";
import isAuthenticated from "../api/isAuthenticated";
import { Route, Navigate } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  if (isAuthenticated() === false) {
    alert("로그인이 필요합니다");
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
}
