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
      <section className="section__promo p-4">
        <div className="promo__content">
          <div className="content__head">
            The Perfect Work from home accessories from <br /> Top Brands
          </div>
          <div className="content__subhead">
            We are here to make good customers to conduct smooth and comfortable{" "}
            <br />
            work from home enivronment.
          </div>
        </div>
        <div className="promo__images p-2">
          <div className="promo__image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjNhE17d0VzkBRvRx4OIm0jjm_SR6ByRY4Zg&usqp=CAU" />
          </div>
          <div className="promo__image grid-span-2">
            <img src="https://brandongaille.com/wp-content/uploads/2013/12/Bassett-Company-Logo.jpg" />
          </div>
          <div className="promo__image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGyIM6sfqkmZLNrMaEGNFbD3MkpY2BqvQJw&usqp=CAU" />
          </div>
          <div className="promo__image grid-span-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ObdBkWDYNz3hZn5Qe586A8ONM_1UxNIKvA&usqp=CAU" />
          </div>
          <div className="promo__image grid-span-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ4oveMGmUS2P0hcAq_EcCFFWaSbWgI1ZHww&usqp=CAU" />
          </div>
        </div>
      </section>
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
