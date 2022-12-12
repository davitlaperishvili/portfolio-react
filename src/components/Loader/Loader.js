import React from "react";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";
import "./loader.scss";
export default function Loader() {
    let state = useSelector((state) => {
        return state;
    });
    console.timeLog(state.app);
    let spinnerColor = state.app.theme === "dark" ? "#ffffff" : "#000000";
    return (
        <div className="loader_spinner">
            <ClipLoader color={spinnerColor} />
        </div>
    );
}
