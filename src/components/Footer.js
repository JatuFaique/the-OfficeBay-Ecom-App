import React from "react";
import Logo from "../assets/OfficeuiLogo.png";

export default function Footer() {
  return (
    <div className="py-4" id="footer">
      <div class="foot-col-1">
        <div class="logo">
          <a href="/">
            <img src={Logo} />
            Office Bay
          </a>
        </div>
        <p>
          Lorem ipsum dolor sit amet, feugiat delicat liberavisse id cum no quo.
        </p>
      </div>

      <div class="foot-col-2">
        <h4>Navigation</h4>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Buying Options</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </div>

      <div class="foot-col-3">
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
      </div>

      <div class="foot-col-4">
        <h4>Info</h4>
        <p>
          Wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex commodo consequat. Autem vel
          hendrerit iriure dolor in hendrerit.
        </p>
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
