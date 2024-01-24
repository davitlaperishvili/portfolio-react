import React, { useState } from "react";
import "./menu.scss";
import { NavLink } from "react-router-dom";
export default function Menu() {
  return (
    <div className="left_section_navigation">
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/portfolio-react/" end>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio-react/web-projects">Web Projects</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio-react/react-projects">
              React Test Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio-react/experience">Experience</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio-react/contacts">Contact me</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
