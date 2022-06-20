import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import logo from "./logo.png";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import "./styles/styles.css";
import "react-toastify/dist/ReactToastify.css";

import ProductsPage from "./pages/ProductsPage";
import WishlistPage from "./pages/WishlistPage";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:product_id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
