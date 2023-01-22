import React from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import Contacts from "../Contacts/Contacts";
import OtherInfo from "../OtherInfo/OtherInfo";
import Admin from "../Admin/Admin";
import ProjectsList from "../Projects/ProjectsList";
import "./mainContent.scss";
import WorkExp from "../WorkExp/WorkExp";
import AdminAddExp from "../Admin/AdminAddExp";
import AdminAddPortfolio from "../Admin/AdminAddPortfolio";
export default function Menu(props) {
  return (
    <div className="main_content">
      <section className="right_section">
        <Routes>
          <Route
            index
            path="/portfolio-react"
            element={<ProjectsList onProjectClick={props.onProjectClick} />}
          ></Route>
          <Route
            index
            path="/portfolio-react/react-projects"
            element={<ProjectsList onProjectClick={props.onProjectClick} />}
          ></Route>
          <Route
            path="/portfolio-react/experience"
            element={<WorkExp />}
          ></Route>
          <Route
            path="/portfolio-react/other-information"
            element={<OtherInfo />}
          ></Route>
          <Route
            path="/portfolio-react/contacts"
            element={<Contacts />}
          ></Route>

          {/* admin panel router */}

          <Route
            path="/portfolio-react/admin"
            element={<Admin />}
          >
            <Route
              path="add-experience"
              element={<AdminAddExp />}
            ></Route>
            <Route
              path="add-portfolio"
              element={<AdminAddPortfolio />}
            ></Route>
            <Route
              path="*"
              element={
                <div>
                  <h3>No page found </h3>
                </div>
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <div>
                <h3>No page found</h3>
              </div>
            }
          />
        </Routes>
      </section>
    </div>
  );
}
