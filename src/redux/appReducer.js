import { CHANGE_THEME } from "./types";

let themeType = localStorage.getItem("theme");
const initialState = {
    theme: themeType ?? "dark",
    themeIsChecked: themeType == "light" ? true : false,
};
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            themeType = themeType == "light" ? "dark" : "light";
            localStorage.setItem("theme", themeType);
            return { ...state, theme: themeType, themeIsChecked: !state.themeIsChecked };
        default:
            return state;
    }
};
