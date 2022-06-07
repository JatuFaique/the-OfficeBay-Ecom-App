import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/OfficeuiLogo.png";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="py-4" id="footer">
      <div className="foot-col-1">
        <div className="logo">
          <a href="/">
            <img src={Logo} />
            Office Bay
          </a>
        </div>
        <p>
          Lorem ipsum dolor sit amet, feugiat<br></br> delicat liberavisse id
          cum no quo.
        </p>
      </div>

      <div className="foot-col-2">
        <h4>Navigation</h4>
        <ul>
          <li>
            <span className="btn" onClick={() => navigate("/")}>
              Home
            </span>
          </li>
          <li>
            {/* <NavLink to="/products">Products</NavLink> */}
            <span className="btn" onClick={() => navigate("/products")}>
              Products
            </span>
          </li>

          <li>
            {/* <NavLink>Support</NavLink> */}
            <span className="btn">Support</span>
          </li>
        </ul>
      </div>

      {/* <div className="foot-col-3">
        <h4>Extended Navigation</h4>
        <ul>
          <li>
            <a href="#">More</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
        </ul>
      </div> */}

      <div className="foot-col-4">
        <h4>Info</h4>
        <p>Made with love by JatuFaique</p>
      </div>

      {/* <div className="section__about-us p-1-25">
        Office Bay <br />
        Al rights reserved
      </div>
      <div className="section__categories p-1-25">Our Categories</div>
      <div className="section__contact-us p-1-25">Contact Us</div> */}
    </div>
  );
}
