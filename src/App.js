import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import logo from "./logo.png";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import "./styles/styles.css";

import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
