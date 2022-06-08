import React from "react";
import HeroImage from "../assets/hero-bg.png";
import decor from "../assets/decor.jpg";
import desk from "../assets/desk.jpg";
import chair from "../assets/chair.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState();
  async function getCategoires() {
    const res = await axios.get("/api/categories");
    console.log("hello", res.data);
    setCategories(res.data.categories);
  }
  useEffect(() => {
    getCategoires();
  }, []);
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
          {categories?.map((categorie) => {
            return (
              <Link to="/products">
                <div className="categories__card">
                  <div className="categories__card-img">
                    <img src={categorie.image} />
                  </div>
                  <div className="categories__card-content-1 p-2">
                    <h1>{categorie.categoryName}</h1>
                    <h4>{categorie.description}</h4>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Home;
