import React, { createContext, useReducer, useContext } from "react";

import wishlistReducer, { initialWishlist } from "../reducers/wishlistReducer";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  return (
    <WishlistContext.Provider
      value={useReducer(wishlistReducer, initialWishlist)}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
