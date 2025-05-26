import React from 'react';

const ProjectCard = ({ title, description, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </a>
);

export default ProjectCard;
