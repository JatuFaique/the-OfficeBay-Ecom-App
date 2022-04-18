import React from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartProvider";
import { useWishlist } from "../context/WishlistProvider";

function WishlistPage() {
  const [cartState, cartDispatch] = useCart();
  const [wishlistState, wishlistDispatch] = useWishlist();
  return (
    <div className="section__wishlist p-3">
      <div class="text-l text-center">Your Wishlist</div>
      <div class="text-sm text-grey text-center">
        You can find your wishlisted items here!
      </div>
      {wishlistState.wishlist.length > 0 ? (
        <>
          <div className="section__wishlistItems">
            {wishlistState.wishlist?.map((item) => {
              return <ProductCard data={item} isWishlist={true} />;
            })}
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="section__cart-empty">
            Schrutez , your wishlist is empty
          </div>
        </>
      )}
    </div>
  );
}

export default WishlistPage;
