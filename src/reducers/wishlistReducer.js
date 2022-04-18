export const initialWishlist = {
  wishlist: [],
};

function wishlistReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      console.log("hi wishlist", state.wishlist);
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case "REMOVE_FROM_WISHLIST":
      console.log("rem wish");
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => {
          item.id !== action.payload.id;
        }),
      };
  }
}

export default wishlistReducer;
