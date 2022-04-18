import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CartProvider } from "./context/CartProvider";
import { BrowserRouter as Router } from "react-router-dom";
import { cartReducer, initialState } from "./reducers/cartReducer";
import { FilterProvider } from "./context/FilterProvider";
import { WishlistProvider } from "./context/WishlistProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WishlistProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </WishlistProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
