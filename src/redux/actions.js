import { CHANGE_THEME, OPEN_MODAL, SIGN_IN } from "./types";

export function changeTheme(currentTheme) {
  return {
    type: CHANGE_THEME,
    payload: currentTheme,
  };
}

export function openModal(projectDesc = null) {
  return {
    type: OPEN_MODAL,
    payload: projectDesc,
  };
}
export function changeUserStatus(isSignIn = false) {
  return {
    type: SIGN_IN,
    payload: isSignIn,
  };
}
