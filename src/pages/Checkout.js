import React from "react";
import CartCard from "../components/CartCard";
import { useCart } from "../context/CartProvider";

function Checkout() {
  const [cartState, cartDispatch] = useCart();
  const totalAmnt = () => {
    let total = 0;
    cartState.cart.map((item) => {
      total = Number(total) + Number(item.quantity) * Number(item.price);
    });
    return total;
  };
  return (
    <div className="section__cart p-3">
      <div class="text-l text-center">Your Cart</div>
      <div class="text-sm text-grey text-center">
        You can find your Cart items here!
      </div>
      {cartState.cart.length >= 1 ? (
        <>
          <div className="section-cart-grid p-3">
            <div class="cart-section-items">
              {cartState.cart?.map((item) => {
                return <CartCard data={item} />;
              })}
            </div>
            <div class="cart-section-summary p-2">
              <div class="text-m">Price Details</div>
              <hr />
              {cartState.cart.map((item) => {
                return (
                  <div class="cart-list-items">
                    <div class="cart-item text-sm text-grey">{item.title}</div>
                    <div class="cart-item-price text-sm bold">{item.price}</div>
                  </div>
                );
              })}

              <hr />
              <div class="cart-list-items">
                <div class="text-m bold">Total</div>
                <div class="text-l">{totalAmnt()}</div>
              </div>
              <button class="btn-prim">Proceed to checkout</button>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="section__cart-empty">
            Schrutez , your cart is empty
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;
