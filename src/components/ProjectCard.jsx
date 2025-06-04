import React from 'react';
import {Link} from "react-router-dom";

const ProjectCard = ({ title, description, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </Link>
);




export default ProjectCard;
