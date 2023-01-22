import React, { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import "./sidebarInfo.scss";
import { Route, Link, NavLink } from "react-router-dom";
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
  }
  function renderAdminInfo() {
    if (state.user.isSignIn) {
      return (
        <div className="admin_info">
          <NavLink
            to="/portfolio-react/admin"
            end
          >
            Admin Panel
          </NavLink>
        </div>
      );
    }
  }
  return (
    <header className="left_section_header">
      <div className="left_section_header_text">
        <h2>
          <Link to="/portfolio-react">Davit Laperishvili</Link>
        </h2>
        <div className="email">
          <a href="mailto:davitlaperishvili@gmail.com">
            davitlaperishvili@gmail.com
          </a>
        </div>
      </div>
      <div className="theme_toggler">
        <input
          type="checkbox"
          id="themeSwitch"
          name="theme-switch"
          checked={state.app.themeIsChecked}
          className="theme-switch__input"
          onChange={onChangeTheme}
        />
        <label
          htmlFor="themeSwitch"
          className="theme-switch__label"
        >
          <span></span>
        </label>
      </div>
      {renderAdminInfo()}
    </header>
  );
}

const mapDispatchToProps = {
  changeTheme,
};
export default connect(null, mapDispatchToProps)(SidebarInfo);
