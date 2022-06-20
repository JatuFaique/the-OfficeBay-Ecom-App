import { toast } from "react-toastify";

export const initialState = {
  cart: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "REQUEST_ADD_TO_CART":
      return {
        ...state,
      };
    case "SUCCESS_ADD_TO_CART":
      toast.success("Added to Cart");
      console.log("oy", action.payload);

      return {
        ...state,
        cart: action.payload,
      };

    case "FAILED_ADD_TO_CART":
      toast.warn("Something went wrong");
      return {
        ...state,
      };

    case "INCREASE_QTY":
      console.log(action.payload);
      return {
        ...state,
        cart: action.payload,
      };
    case "DECREASE_QTY":
      console.log(action.payload);
      return {
        ...state,
        cart: action.payload,
      };
    case "REMOVE_FROM_CART":
      toast.success("Removed Item Successfully");
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
}

export default cartReducer;
