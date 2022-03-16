import React from "react";
import { useSelector } from "react-redux";

import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute() {
  // chech for auth token in the state
  const authToken = useSelector((state) => state.token);

  return authToken.token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
