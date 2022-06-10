import React from "react";
import { useCart } from "../context/CartProvider";
import { useWishlist } from "../context/WishlistProvider";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function ProductCard({ data, isWishlist }) {
  const navigate = useNavigate();
  const [authState, authDispatch] = useAuth();
  const [cartState, cartDispatch] = useCart();
  const [wishlist, wishlistDispatch] = useWishlist();

  const handleAddtoCart = async (prod) => {
    try {
      cartDispatch({
        type: "REQUEST_ADD_TO_CART",
      });

      const encT = localStorage.getItem("token");
      console.log(encT, prod);
      const res = await axios.post(
        "/api/user/cart",
        { product: prod },
        {
          headers: {
            authorization: encT,
          },
        }
      );

      if (res.status == 200 || res.status == 201) {
        console.log("resp = ", res.data);
        cartDispatch({
          type: "SUCCESS_ADD_TO_CART",
          payload: res.data.cart,
        });
      }
    } catch (err) {
      alert("Unexpected error");
      cartDispatch({
        type: "FAILED_ADD_TO_CART",
      });
    }
    // cartDispatch({
    //   type: "ADD_TO_CART",
    //   payload: prod,
    // });
  };

  const handleAddtoWishlist = async (prod) => {
    try {
      wishlistDispatch({
        type: "REQUEST_ADD_TO_WISHLIST",
      });

      const encT = localStorage.getItem("token");
      console.log(encT, prod);
      const res = await axios.post(
        "/api/user/wishlist",
        { product: prod },
        {
          headers: {
            authorization: encT,
          },
        }
      );

      if (res.status == 200 || res.status == 201) {
        console.log("resp = ", res.data);
        wishlistDispatch({
          type: "SUCCESS_ADD_TO_WISHLIST",
          payload: res.data.wishlist,
        });
      }
    } catch (err) {
      alert("Unexpected error");
      wishlistDispatch({
        type: "FAILED_ADD_TO_WISHLIST",
      });
    }
  };

  const handleRemoveWishlist = async (prod) => {
    try {
      const encT = localStorage.getItem("token");
      console.log(encT, prod);
      const res = await axios.delete(`/api/user/wishlist/${prod._id}`, {
        headers: {
          authorization: encT,
        },
      });

      if (res.status == 200 || res.status == 201) {
        console.log("resp = ", res.data);
        wishlistDispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: res.data.wishlist,
        });
      }
    } catch {
      wishlistDispatch({
        type: "FAILED_REMOVE_FROM_WISHLIST",
      });
    }
  };
  return (
    <div className="product__card ">
      <div className="product__card-img">
        <img src={data.img} alt="imageHere"></img>
      </div>
      <div className="product__card-content p-0-5">
        <div className="product__card-info">
          <h3>{data.title}</h3>
          <h2>{`${data.price}₹`}</h2>
          <p>
            {data.description} ,<em>{data.categoryName}</em>
          </p>
        </div>
      </div>
      {isWishlist ? (
        <>
          <div className="product__card-btn p-1">
            <button
              className="btn-prim"
              onClick={() => {
                if (authState.login) {
                  handleAddtoCart(data);
                  handleRemoveWishlist(data);
                }
                // authState.login ? handleAddtoCart(data) : navigate("/login");
              }}
            >
              Add to cart
            </button>
            <button
              className="btn-prim"
              onClick={() => {
                authState.login
                  ? handleRemoveWishlist(data)
                  : navigate("/login");
              }}
            >
              Remove from Wishlist
            </button>
          </div>
        </>
      ) : (
        <div className="product__card-btn p-1">
          <button
            className="btn-prim"
            onClick={() => {
              authState.login ? handleAddtoCart(data) : navigate("/login");
            }}
          >
            Add to cart
          </button>
          <button
            className="btn-prim"
            onClick={() => {
              authState.login ? handleAddtoWishlist(data) : navigate("/login");
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
