export const initialFilter = {
  maxPrice: 10000,
  setCategories: [],
  minDiscount: 0,
  sortBy: "LOW_TO_HIGH",
};

function filterReducer(state, action) {
  console.log("ohmy mata", action);
  switch (action.type) {
    case "MAX_PRICE":
      return {
        ...state,
        maxPrice: action.payload,
      };
  }
}

export default filterReducer;
