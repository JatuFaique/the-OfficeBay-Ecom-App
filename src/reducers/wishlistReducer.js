export const initialWishlist = {
  wishlist: [],
};

function wishlistReducer(state, action) {
  switch (action.type) {
    case "REQUEST_ADD_TO_WISHLIST":
      return {
        ...state,
      };
    case "SUCCESS_ADD_TO_WISHLIST":
      console.log("oy", action.payload);
      return {
        ...state,
        wishlist: action.payload,
      };

    case "FAILED_ADD_TO_WISHLIST":
      return {
        ...state,
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: action.payload,
      };

    case "FAILED_REMOVE_FROM_WISHLIST":
      return {
        ...state,
      };
  }
}

export default wishlistReducer;
