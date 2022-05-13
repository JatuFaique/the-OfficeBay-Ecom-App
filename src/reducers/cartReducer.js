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
      console.log("oy", action.payload);
      return {
        ...state,
        cart: action.payload,
      };

    case "FAILED_ADD_TO_CART":
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
      return {
        ...state,
        cart: action.payload,
      };
    // case "ADD_TO_CART":
    //   let index = state.cart.findIndex((ele) => ele.id === action.payload.id);
    //   if (index === -1) {
    //     return {
    //       ...state,
    //       cart: [...state.cart, action.payload],
    //     };
    //   } else {
    //     return (t_arr = [...t_arr]);
    //   }
    // case "REMOVE_FROM_CART":
    //   let rq = [...state.cart];
    //   rq = rq.filter((c) => c.id !== action.payload.id);
    //   return {
    //     ...state,
    //     cart: rq,
    //   };

    // case "DECREASE_QTY":
    //   if (action.payload.quantity > 0) {
    //     let t_arr = [...state.cart];
    //     t_arr = t_arr.map((item) => {
    //       return item.id === action.payload.id
    //         ? { ...item, quantity: item.quantity - 1 }
    //         : item;
    //     });
    //     console.log(t_arr);
    //     return {
    //       ...state,
    //       cart: t_arr,
    //     };
    //   } else {
    //     console.log(t_arr);
    //     return {
    //       ...state,
    //     };
    //   }

    default:
      return state;
  }
}

export default cartReducer;
