import React, { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import "./sidebarInfo.scss";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeTheme } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
const images = ["/images/profile.jpg"];

function SidebarInfo(props) {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    let state = useSelector((state) => {
        return state;
    });
    function onChangeTheme(e) {
        dispatch(changeTheme(state.app.theme));
        console.log(e.target);
        //document.querySelector('main').classList = `${state.app.theme} trans-all-4`;
    }
    return (
        <header className="left_section_header">
            {/* <div className="sidebar_gallery">
        <button type="button"  onClick={() => setIsOpen(true)}>
            <img src="/images/profile.jpg" alt="" />
        </button>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          />
        )}
      </div> */}
            <div className="left_section_header_text">
                <h2>
                    <Link to="/">Davit Laperishvili</Link>
                </h2>
                <div className="email">
                    <a href="mailto:davitlaperishvili@gmail.com">davitlaperishvili@gmail.com</a>
                </div>
            </div>
            <div className="theme_toggler">
                <input type="checkbox" id="themeSwitch" name="theme-switch" checked={state.app.themeIsChecked} className="theme-switch__input" onChange={onChangeTheme} />
                <label htmlFor="themeSwitch" className="theme-switch__label">
                    <span></span>
                </label>
            </div>
        </header>
    );
}

const mapDispatchToProps = {
    changeTheme,
};
export default connect(null, mapDispatchToProps)(SidebarInfo);
