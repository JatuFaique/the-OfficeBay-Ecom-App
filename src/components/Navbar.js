import React from "react";
import logo from "../assets/OfficeuiLogo.png";

export default function Navbar() {
  return (
    <nav className="top-nav center-align px-3">
      <section className="brand">
        <a href="">
          <img className="brand-logo" src={logo}></img>
        </a>
        <span className="brand-name-title p-0-5">The Office Bay</span>
      </section>
      <div className="nav-icons center-align">
        <i class="fas fa-heart p-0-5"></i>
        <i class="fas fa-shopping-basket"></i>
        <div class="av-s br-bs">F</div>
      </div>
    </nav>
  );
}
