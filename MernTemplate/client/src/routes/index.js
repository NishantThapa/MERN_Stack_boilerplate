import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/MessageBoard/Dashboard";
import Landing from "../components/Landing/Landing";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../components/NotFound";

export const RouteConfig = () => {
  
  return (
    <Routes>
      <Route
        exact
        path="/dashboard"
        element={<PrivateRoute component={Dashboard} />}
      />
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
