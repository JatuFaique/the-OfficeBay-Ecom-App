import React, { createContext, useContext, useReducer } from "react";

import cartReducer, { initialState } from "../reducers/cartReducer";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={useReducer(cartReducer, initialState)}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
