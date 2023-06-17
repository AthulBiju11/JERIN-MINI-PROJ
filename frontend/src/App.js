import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loginpage, HomePage, Products, SignupPage } from "./Routes.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { ProductsProvider } from "./context/productContext";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <div>
    <QueryClientProvider client={queryClient}>
    <ProductsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Loginpage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </BrowserRouter>
          </ProductsProvider>
          </QueryClientProvider>

      <ToastContainer />
    </div>
  );
};

export default App;
