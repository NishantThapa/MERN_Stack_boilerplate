import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const NotFound = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (isAuthenticated) return <div>404 Page not found...</div>;
  return <Navigate to="/" />;
};

export default NotFound;
