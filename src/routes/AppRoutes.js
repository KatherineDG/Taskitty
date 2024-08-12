import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Registro from "../pages/Registro";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
  );
}

export default AppRoutes;