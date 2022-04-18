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
      console.log("oy", action.payload);
      let t_arr = [...state.cart];
      t_arr = t_arr.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      console.log("idhr", t_arr);
      return {
        ...state,
        cart: t_arr,
      };

    case "DECREASE_QTY":
      if (action.payload.quantity > 0) {
        let t_arr = [...state.cart];
        t_arr = t_arr.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        });
        console.log(t_arr);
        return {
          ...state,
          cart: t_arr,
        };
      } else {
        console.log(t_arr);
        return {
          ...state,
        };
      }

    default:
      return state;
  }
}

export default cartReducer;
