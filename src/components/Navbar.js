import React from "react";
import logo from "../assets/OfficeuiLogo.png";
import { useCart } from "../context/CartProvider";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useFilter } from "../context/FilterProvider";

export default function Navbar() {
  const [authState, loginDispatch] = useAuth();
  const [filterState, filterDispatch] = useFilter();
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
        <section class="input-box disp-flex">
          <div class="input-field">
            <input
              type="text"
              onChange={(e) => {
                filterDispatch({
                  type: "SEARCHTERM",
                  payload: e.target.value,
                });
              }}
            />
          </div>
        </section>
        {authState.login ? `Your Cart Value :${cartState.cart.length}` : <></>}
        <i
          className="btn fas fa-heart p-0-5 "
          onClick={() => {
            navigate("/wishlist");
          }}
        ></i>
        <i
          className="btn fas fa-shopping-basket"
          onClick={() => {
            navigate("/checkout");
          }}
        ></i>
        {authState.login ? (
          <>
            <div className="btn av-s br-bs">{authState.userDetail[0]}</div>
            <i
              onClick={() => {
                localStorage.clear();
                loginDispatch({
                  type: "LOGOUT",
                });
                navigate("/login");
              }}
              class="btn fa-solid fa-right-from-bracket"
            ></i>
          </>
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
