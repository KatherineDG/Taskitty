import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Registro from "../pages/Registro";
import Home from "../pages/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/home-espacios" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;