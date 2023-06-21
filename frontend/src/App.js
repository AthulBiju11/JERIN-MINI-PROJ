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

import Profile from "./pages/ProfilePage/profile.page";


import newRequest from "./utils/newRequest";

const App = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (event.currentTarget.performance.navigation.type !== 1) {
        localStorage.removeItem("persist:root");
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(()=>{
    if(currentUser){
      const res = newRequest.get(`/cart/${currentUser._id}`)
      
    }
  },[currentUser])
  
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
                <Route path="/profile" element={<Profile />} />
                
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
