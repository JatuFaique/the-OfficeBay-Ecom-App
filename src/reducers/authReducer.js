import { toast } from "react-toastify";

export const initialState = {
  login: false,
  loading: true,
  token: "",
  errorMessage: null,
  userDetail: "",
  addresses: [],
};

function authReducer(state, action) {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...state,
        loading: true,
      };
    case "SUCCESS_LOGIN":
      toast.success("Successfull Login");
      return {
        ...state,
        login: true,
        token: action.payload.token,
        userDetail: action.payload.email,
      };
    case "FAILED_LOGIN":
      toast.warn(`${action.payload}`);
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };

    case "REQUEST_SIGNUP":
      return {
        ...state,
        loading: true,
      };
    case "SIGNUP_SUCCESS":
      toast.success("SignUp Successfull");
      return {
        ...state,
        login: true,
        token: action.payload.token,
        userDetail: action.payload.email,
      };
    case "LOGOUT":
      toast.success("Successfull Logout");
      localStorage.clear();
      return {
        login: false,
      };

    case "VALIDATION_ERROR":
      toast.warn(`${action.payload}`);
      return {
        errorMessage: action.payload,
      };

    case "ADD_TO_ADDRESS":
      toast.success("Address Added Successfully");
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
      };

    default:
      return state;
  }
}

export default authReducer;
