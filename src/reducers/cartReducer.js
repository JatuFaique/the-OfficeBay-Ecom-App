export const initialState = {
  cart: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      let index = state.cart.findIndex((ele) => ele.id === action.payload.id);
      if (index === -1) {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      } else {
        return (t_arr = [...t_arr]);
      }
    case "REMOVE_FROM_CART":
      let rq = [...state.cart];
      rq = rq.filter((c) => c.id !== action.payload.id);
      return {
        ...state,
        cart: rq,
      };
    case "INCREASE_QTY":
      let t_arr = [...state.cart];
      t_arr = t_arr.map((item) => {
        return item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      return {
        ...state,
        t_arr,
      };
    case "DECREASE_QTY":
      if (action.payload.quantity > 0) {
        let t_arr = [...state.cart];
        t_arr = t_arr.map((item) => {
          return item.id === action.item.id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        });
        return {
          ...state,
          cart: t_arr,
        };
      } else {
        return {
          ...state,
        };
      }

    default:
      return state;
  }
}

export default cartReducer;
