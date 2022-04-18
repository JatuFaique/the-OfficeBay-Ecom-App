import React from "react";
import HeroImage from "../assets/hero-bg.png";
import decor from "../assets/decor.jpg";
import desk from "../assets/desk.jpg";
import chair from "../assets/chair.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="section__home ">
      <div className="section__home-hero bottom">
        <img src={HeroImage}></img>
        <section className="hero-title">
          <h1> Your One Stop Solution</h1>
          <h2>
            {" "}
            for all <em>Office Needs</em>{" "}
          </h2>
          <button
            className="btn-prim"
            onClick={() => {
              navigate("/products");
            }}
          >
            Continue Shopping
          </button>
        </section>
      </div>
      <div className="section__home-categories p-4">
        <h2 className="categories__text p-3">Top categories to buy from</h2>
        <section className="categories__card_containers">
          <div className="categories__card">
            <div className="categories__card-img">
              <img src={decor} />
            </div>
            <div className="categories__card-content-1 p-2">
              <h1>Decor</h1>
              <h4>This is your home essentianls</h4>
            </div>
          </div>
          <div className="categories__card">
            <div className="categories__card-img">
              <img src={desk} />
            </div>
            <div className="categories__card-content-2 p-2">
              <h1>Decor</h1>
              <h4>This is your home essentianls</h4>
            </div>
          </div>
          <div className="categories__card">
            <div className="categories__card-img">
              <img src={decor} />
            </div>
            <div className="categories__card-content-3 p-2">
              <h1>Decor</h1>
              <h4>This is your home essentianls</h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
