import React from "react";
import { useCart } from "../context/CartProvider";

function ProductCard({ data }) {
  const [cartState, cartDispatch] = useCart();

  const handleAddtoCart = (prod) => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: prod,
    });
  };
  return (
    <div className="product__card ">
      <div className="product__card-img">
        <img src={data.img} alt="imageHere"></img>
      </div>
      <div className="product__card-content p-0-5">
        <div className="product__card-info">
          <h3>{data.title}</h3>
          <h2>{data.price}</h2>
          <p>{data.author} </p>
        </div>
      </div>
      <div className="product__card-btn p-1">
        <button className="btn-prim" onClick={() => handleAddtoCart(data)}>
          Add to cart
        </button>
        <button className="btn-prim">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
