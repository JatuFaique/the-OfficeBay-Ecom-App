import React from "react";
import logo from "../assets/OfficeuiLogo.png";
import { useCart } from "../context/CartProvider";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [cartState] = useCart();
  const navigate = useNavigate();

  return (
    <nav className="top-nav center-align px-3">
      <section
        className="brand"
        onClick={() => {
          navigate("/");
        }}
      >
        <a href="">
          <img className="brand-logo" src={logo}></img>
        </a>
        <span className="brand-name-title p-0-5">The Office Bay</span>
      </section>
      <div className="nav-icons center-align">
        Your Cart Value :{cartState.cart.length}
        <i
          className="fas fa-heart p-0-5 "
          onClick={() => {
            navigate("/wishlist");
          }}
        ></i>
        <i
          className="fas fa-shopping-basket"
          onClick={() => {
            navigate("/checkout");
          }}
        ></i>
        <div className="av-s br-bs">F</div>
      </div>
    </nav>
  );
}
