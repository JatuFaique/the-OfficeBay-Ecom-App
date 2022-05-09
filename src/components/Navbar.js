import React from "react";
import logo from "../assets/OfficeuiLogo.png";
import { useCart } from "../context/CartProvider";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function Navbar() {
  const [authState, loginDispatch] = useAuth();
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
        <div>{String(authState.login)}</div>
        Your Cart Value :{cartState.cart.length}
        <i
          class="fas fa-heart p-0-5 "
          onClick={() => {
            navigate("/wishlist");
          }}
        ></i>
        <i
          class="fas fa-shopping-basket"
          onClick={() => {
            navigate("/checkout");
          }}
        ></i>
        <div class="av-s br-bs">F</div>
      </div>
    </nav>
  );
}
