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
        className="brand btn"
        onClick={() => {
          navigate("/");
        }}
      >
        <img className="brand-logo" src={logo}></img>

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
        {authState.login ? (
          <div className="av-s br-bs">{authState.userDetail[0]}</div>
        ) : (
          <div
            className="btn"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </div>
        )}
      </div>
    </nav>
  );
}
