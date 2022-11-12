import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  if (loading) return null;
  if (isAuthenticated) return <Component />;
  return <Navigate to="/" />;
};

export default PrivateRoute;
