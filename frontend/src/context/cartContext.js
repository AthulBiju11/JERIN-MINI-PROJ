import { createContext, useContext, useEffect, useState } from "react";
import newRequest from "../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import { ProductsContext } from "./productContext";

export const CartContext = createContext({
  data: [],
});

export const CartProvider = ({ children }) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const { data: productData } = useContext(ProductsContext);
    const [cartItems, setCartItems] = useState([]);
  
    const { isLoading, error, data, refetch } = useQuery({
      queryKey: ["cart"],
      queryFn: () =>
        newRequest.get(`/cart/${currentUser._id}`).then((res) => {
          return res.data;
        }),
    });
  
    useEffect(() => {
        if (productData && data) {
          const filteredProducts = productData
            .filter((product) => data.some((item) => item.product === product._id))
            .map((product) => {
              const cartItem = data.find((item) => item.product === product._id);
              return { ...product, quantity: cartItem.quantity };
            });
          setCartItems(filteredProducts);
        }
      }, [productData, data]);
      
  
    const value = { data: cartItems };
  
    return (
      !isLoading && (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
      )
    );
  };
  