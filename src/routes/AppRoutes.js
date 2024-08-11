import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
    </Routes>
  );
}

export default AppRoutes;