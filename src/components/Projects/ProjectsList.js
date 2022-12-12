import React, { useState, useEffect } from "react";
import "./projects.scss";
import projects from "../../services/Projects";
import ProjectItem from "./ProjectItem";
import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import Loader from "../Loader/Loader";

export default function ProjectsList(props) {
    const [projectsList, setProjectsList] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const projectsCol = collection(db, "projects");
            const projectsSnapshot = await getDocs(projectsCol);
            const projectsList = projectsSnapshot.docs.map((doc) => doc.data());
            setProjectsList(projects);
            setCount(projects.length);
        }
        fetchData();
    }, []);

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
