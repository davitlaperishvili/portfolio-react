import React from "react";
import Modal from "react-modal";
import Parser from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/actions";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement('.works_listing');
export default function ProjectItem({
  projectName,
  projectStatus,
  projectImageName,
  projectLink,
  usedTechnologies,
  onProjectClick,
  projectDesc,
  projectRepoLink,
}) {
  const dispatch = useDispatch();

  function triggerModal() {
    dispatch(openModal(projectDesc));
  }

  function renderProjectStatus() {
    return projectStatus ? (
      <span className="finished">Finished</span>
    ) : (
      <span className="in_progress">In Progress</span>
    );
  }

  function renderRepoLink() {
    if (projectRepoLink) {
      return (
        <a
          target="__blank"
          href={projectRepoLink}
          className="git"
        >
          GitHub Repo
        </a>
      );
    }
    return;
  }
  return (
    <li onClick={onProjectClick}>
      <figure>
        <a
          target="__blank"
          href={projectLink}
        >
          <img
            src={`/portfolio-react/images/${projectImageName}`}
            className="lazy"
            alt={projectName}
          />
        </a>

        <div className="hover_block">
          <a
            target="__blank"
            href={projectLink}
          >
            Visite site
          </a>
        </div>
      </figure>
      <div className="work_details">
        <h3 className="work_title">
          <a
            target="__blank"
            href={projectLink}
          >
            {projectName}
          </a>
        </h3>
        <div className="work_desc">
          <p>Status: {renderProjectStatus()}</p>
          Used technologies: {usedTechnologies}
        </div>
        <div className="visite_site">
          <div className="buttons">
            <a
              target="__blank"
              href={projectLink}
            >
              Visite site
            </a>
            {renderRepoLink()}
            <button onClick={triggerModal}>Read More</button>
          </div>
        </div>
      </div>
    </li>
  );
}
