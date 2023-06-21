import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loginpage, HomePage, Products, SignupPage } from "./Routes.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./pages/AdminPage/admin.page";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ProductsProvider } from "./context/productContext";
import Cart from "./pages/CartPage/cart.page";
import { CartProvider } from "./context/cartContext";
import { useDispatch, useSelector } from "react-redux";
import { pushCartToDatabase } from "./store/cart/cart.reducer";
import { selectCartItems } from "./store/cart/cart.selector";
import { current } from "@reduxjs/toolkit";

const App = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (event.currentTarget.performance.navigation.type !== 1) {
        localStorage.clear();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>
          <CartProvider>
          
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Loginpage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<Products />} />
                
                {currentUser && (<Route path="/cart" element={<Cart />} />)}             

                {currentUser?.isAdmin && (
                  <Route path="/admin" element={<Admin />} />
                )}
                
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </ProductsProvider>
      </QueryClientProvider>

      <ToastContainer />
    </div>
  );
};

export default App;
