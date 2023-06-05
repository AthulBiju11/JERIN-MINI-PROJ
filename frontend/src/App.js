import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loginpage, HomePage, Products, SignupPage } from "./Routes.js";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </div>
  );
};

export default App;
