import { OPEN_MODAL } from "./types";

const initialState = {
  isOpen: false,
  projectDesc: null,
};

export const projectReducer = (state = initialState, action) => {
  let switchState = state.isOpen;
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isOpen: !switchState, projectDesc: action.payload };
    default:
      return state;
  }
};
