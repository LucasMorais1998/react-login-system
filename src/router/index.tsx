import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

import { Login } from "../pages/Login";
import { Private } from "../pages/Private";
import { Register } from "../pages/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/private" element={<Private />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
