import React from "react";
import { Route, Navigate } from "react-router-dom";
import isAuthenticated from "../api/isAuthenticated";

export default function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? <Navigate to="/main" /> : <Component {...props} />
      }
    />
  );
}

// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();
// function go() {
//   navigate("/login");
// }

// export default go;
