import { useCart } from "../context/CartProvider";

export const initialFilter = {
  maxPrice: 10000,
  setCategories: [],
  minDiscount: 0,
  minRating: 1,
  sortBy: "LOW_TO_HIGH",
  searchTerm: "",
};

function filterReducer(state, action) {
  switch (action.type) {
    case "CATEGORIES":
      if (action.payload.checked) {
        return {
          ...state,
          setCategories: [...state.setCategories, action.payload.value],
        };
      } else {
        return {
          ...state,
          setCategories: state.setCategories.filter((cat) => {
            return cat !== action.payload.value;
          }),
        };
      }

    case "SEARCHTERM":
      return {
        ...state,
        searchTerm: action.payload,
      };

    case "DISCOUNT":
      return {
        ...state,
        minDiscount: action.payload,
      };
    case "RATING":
      return {
        ...state,
        minRating: action.payload,
      };
    case "HIGH_TO_LOW":
      console.log("htl");
      return {
        ...state,
        sortBy: action.payload,
      };
    case "LOW_TO_HIGH":
      console.log("lth");
      return {
        ...state,
        sortBy: action.payload,
      };
    case "MAX_PRICE":
      return {
        ...state,
        maxPrice: action.payload,
      };
  }
}

export default filterReducer;
