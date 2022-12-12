import React, { useState } from "react";
import "./menu.scss";
import { NavLink } from "react-router-dom";
export default function Menu() {
    return (
        <div className="left_section_navigation">
            <nav className="navigation">
                <ul>
                    <li>
                        <NavLink to="/portfolio-react">Web Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio-react/experience">Experience</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio-react/other-information">Other Info</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio-react/contacts">Contacts</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
