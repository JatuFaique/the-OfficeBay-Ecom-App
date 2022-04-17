import React from "react";
import { useCart } from "../context/CartProvider";
import { useWishlist } from "../context/WishlistProvider";

function ProductCard({ data, isWishlist }) {
  const [cartState, cartDispatch] = useCart();
  const [wishlist, wishlistDispatch] = useWishlist();

  const handleAddtoCart = (prod) => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: prod,
    });
  };

  const handleAddtoWishlist = (prod) => {
    wishlistDispatch({
      type: "ADD_TO_WISHLIST",
      payload: prod,
    });
  };

  const handleRemoveWishlist = (prod) => {
    wishlistDispatch({
      type: "REMOVE_FROM_WISHLIST",
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
      {isWishlist ? (
        <>
          <div className="product__card-btn p-1">
            <button className="btn-prim" onClick={() => handleAddtoCart(data)}>
              Add to cart
            </button>
            <button
              className="btn-prim"
              onClick={() => {
                handleRemoveWishlist(data);
              }}
            >
              Remove from Wishlist
            </button>
          </div>
        </>
      ) : (
        <div className="product__card-btn p-1">
          <button className="btn-prim" onClick={() => handleAddtoCart(data)}>
            Add to cart
          </button>
          <button
            className="btn-prim"
            onClick={() => {
              handleAddtoWishlist(data);
            }}
          >
            Add to wishlist
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
