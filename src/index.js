import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CartProvider } from "./context/CartProvider";
import { BrowserRouter as Router } from "react-router-dom";
import { cartReducer, initialState } from "./reducers/cartReducer";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
