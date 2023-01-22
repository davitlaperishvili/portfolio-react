import { SIGN_IN } from "./types";

const initialState = {
  isSignIn: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignIn: action.payload };
    default:
      return state;
  }
};
