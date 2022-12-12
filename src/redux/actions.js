import { CHANGE_THEME, OPEN_MODAL } from "./types";

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
