import React, { useState, useEffect } from "react";
import "./projects.scss";
import reactProjects from "../../services/ReactProjects";
import projects from "../../services/Projects";
import ProjectItem from "./ProjectItem";
import Loader from "../Loader/Loader";
import { useLocation } from "react-router-dom";

export default function ProjectsList(props) {
  const [projectsList, setProjectsList] = useState([]);
  const [count, setCount] = useState(0);
  const history = useLocation();

  useEffect(() => {
    async function fetchData() {
      if (history.pathname.includes("/portfolio-react/react-projects")) {
        setProjectsList(reactProjects);
        setCount(reactProjects.length);
      } else {
        setProjectsList(projects);
        setCount(projects.length);
      }
    }
    fetchData();
  });

  function renderProjects() {
    if (projectsList.length > 0) {
      return projectsList.map((project, projectNum) => {
        return (
          <ProjectItem
            key={project.projectName}
            projectName={project.projectName}
            projectLink={project.projectLink}
            projectStatus={project.projectStatus}
            usedTechnologies={project.usedTechnologies}
            projectImageName={project.projectImageName}
            projectDesc={project.projectDesc}
            onProjectClick={props.onProjectClick}
          />
        );
      });
    } else {
      return <Loader />;
    }
  }
  return (
    <div className="content">
      <h2 className="right_section_title">Projects List ({count})</h2>
      <div className="works_listing">
        <ul>{renderProjects()}</ul>
      </div>
    </div>
  );
}
