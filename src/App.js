import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import logo from "./logo.png";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import "./styles/styles.css";

import ProductsPage from "./pages/ProductsPage";
import WishlistPage from "./pages/WishlistPage";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
