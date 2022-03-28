import React from "react";

export default function Navbar() {
  return (
    <nav class="top-nav center-align">
      <div class="brand">
        <a href="/index.html">
          <img class="brand-logo" src="/ass" />
        </a>
        <span class="brand-name-title">The Office Bay</span>
      </div>
      <div>
        <div>
          <input type="text" name="" class="search-box" />
        </div>
      </div>
      <div class="nav-icons">
        <a href="/pages/authentication/authentication.html">
          <i class="fas fa-user"></i>
        </a>
        <a href="/pages/wishlist/wishlist.html">
          <i class="fas fa-heart"></i>
        </a>
        <a href="/pages/cart/cart.html">
          <i class="fas fa-shopping-cart"></i>
        </a>
      </div>
    </nav>
  );
}
