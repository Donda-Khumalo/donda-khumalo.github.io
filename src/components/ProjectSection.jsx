import React from 'react';
import ProjectCard from './ProjectCard.jsx';

const ProjectSection = ({ title, projects }) => (
    <div className="projects">
        <h1>{title}</h1>
        {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
        ))}
    </div>
);

export default ProjectSection;
