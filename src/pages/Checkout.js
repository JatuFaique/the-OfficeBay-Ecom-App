import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AddressModal from "../components/AddressModal";
import CartCard from "../components/CartCard";
import { useAuth } from "../context/AuthProvider";
import { useCart } from "../context/CartProvider";

function Checkout() {
  const [addressModal, setAddressModal] = useState(false);
  const [addressSelected, setAddressSelected] = useState();
  const [cartState, cartDispatch] = useCart();
  const [authState, loginDispatch] = useAuth();
  const navigate = useNavigate();
  console.log("cart items", cartState.cart);
  const totalAmnt = () => {
    let total = 0;
    cartState.cart.map((item) => {
      total = Number(total) + Number(item.qty) * Number(item.price);
    });
    return total;
  };

  const handleAddress = (formData) => {
    loginDispatch({
      type: "ADD_TO_ADDRESS",
      payload: formData,
    });
  };

  const handleAddressModal = () => {
    setAddressModal(false);
  };

  console.log("check", authState.addresses);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const makePaymentHandler = async () => {
    const amount = totalAmnt();
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_yyxqq0otoGCIBL", // Enter the Key ID generated from the Dashboard
      currency: "INR",
      amount: amount * 100,
      name: "OfficeBay",
      description: "Thank you for shopping with OfficeBay",
      handler: async function (response) {
        console.log(response);
        if (!!response.razorpay_payment_id) {
          cartDispatch({
            type: "RESET_CART",
          });
          // navigate("/");
          toast.success(
            `Items purchased successfully with payment ID: ${response.razorpay_payment_id}`
          );
        }
      },

      prefill: {
        name: "OfficeBay",
        email: "office@gmail.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleSelectAddress = () => {
    setAddressSelected(true);
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
              <div className="p-2">
                <p className="text-l p-1">Add your Address</p>
                <button
                  onClick={() => setAddressModal(true)}
                  className="btn-secd"
                >
                  Add Address
                </button>
                {authState.addresses?.map((address) => {
                  return (
                    <div class="card card-vertical">
                      <div class="card-content">
                        <div class="card-text">
                          <input
                            onChange={() => handleSelectAddress()}
                            name="address"
                            id="address"
                            type="radio"
                          />
                          <p style={{ fontWeight: "bold" }}>
                            {address.contact_person}
                          </p>
                          <p>{address.address}</p>
                          <p>{address.pincode}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {addressModal ? (
                  <>
                    <AddressModal
                      handleAddressModal={handleAddressModal}
                      handleAddress={handleAddress}
                    />
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div class="cart-section-summary p-2">
              <div class="text-m">Price Details</div>
              <hr />
              {cartState.cart.map((item) => {
                return (
                  <div class="cart-list-items">
                    <div class="cart-item text-sm text-grey">{item.title}</div>
                    <div class="cart-item-price text-sm bold">{`${item.price}₹`}</div>
                  </div>
                );
              })}

              <hr />
              <div class="cart-list-items">
                <div class="text-m bold">Total</div>
                <div class="text-l">{`${totalAmnt()}₹`}</div>
              </div>
              {addressSelected ? (
                <>
                  <button onClick={makePaymentHandler} class="btn-prim">
                    Proceed to checkout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={makePaymentHandler}
                    class="btn-prim"
                    style={{ background: "grey", color: "black" }}
                  >
                    Proceed to checkout
                  </button>
                </>
              )}
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
