import axios from "axios";
import React from "react";
import { useCart } from "../context/CartProvider";
import { useWishlist } from "../context/WishlistProvider";

function CartCard({ data }) {
  const [cartState, cartDispatch] = useCart();
  const [wishlist, wishlistDispatch] = useWishlist();
  const handleQtyDecre = async (data) => {
    try {
      const encT = localStorage.getItem("token");
      console.log(encT, data);
      const res = await axios.post(
        `/api/user/cart/${data._id}`,
        {
          action: {
            type: "decrement",
          },
        },
        {
          headers: {
            authorization: encT,
          },
        }
      );
      cartDispatch({
        type: "DECREASE_QTY",
        payload: res.data.cart,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleQtyIncre = async (data) => {
    try {
      const encT = localStorage.getItem("token");
      console.log(encT, data);
      const res = await axios.post(
        `/api/user/cart/${data._id}`,
        {
          action: {
            type: "increment",
          },
        },
        {
          headers: {
            authorization: encT,
          },
        }
      );
      cartDispatch({
        type: "INCREASE_QTY",
        payload: res.data.cart,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleRemove = async (data) => {
    try {
      const encT = localStorage.getItem("token");
      console.log("dmamd", encT);
      const res = await axios.delete(`/api/user/cart/${data._id}`, {
        headers: {
          authorization: encT,
        },
      });
      console.log("resp = ", res.data);
      if (res.status == 200 || res.status == 201) {
        cartDispatch({
          type: "REMOVE_FROM_CART",
          payload: res.data.cart,
        });
      }
    } catch (err) {
      console.log(err);
    }

    // wishlistDispatch({
    //   type: "ADD_TO_WISHLIST",
    //   payload: data,
    // });
  };
  return (
    <div className="cart_product__card ">
      <div>
        <div className="cart_product__card-img">
          <img
            src={data.img}
            alt="imageHere"
            width="250px"
            height="250px"
          ></img>
        </div>
      </div>

      <div className="card-content">
        <div className="cart_product__card-content p-0-5">
          <div className="cart_product__card-info">
            <h3>{data.title} </h3>
            <h2>{data.price}</h2>
            <p>{data.author}</p>
          </div>
        </div>
        <div className="cart_product__card-btn p-1">
          <button
            className="btn-qty"
            onClick={() => {
              handleQtyDecre(data);
            }}
          >
            -1
          </button>
          <h3 className="p-0-5">{data.qty}</h3>
          <button
            className="btn-qty"
            onClick={() => {
              handleQtyIncre(data);
            }}
          >
            +1
          </button>
        </div>
        <div className="cart_product__card-btn p-1">
          <button
            className="btn-prim"
            onClick={() => {
              handleRemove(data);
            }}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
