import React from 'react';


const ProjectDetails = ({ project }) => {
    if (!project) return <p className="not-found">Project not found.</p>;

    const { title, description, tools, skills, link } = project;

    return (
        <div className="project-details-container">
            <h1 className="project-title">{title}</h1>

            <p className="project-description">{description}</p>

            <div className="section">
                <h2 className="section-heading">Tools Used</h2>
                <ul className="list">
                    {tools?.map((tool, idx) => (
                        <li key={idx} className="list-item">{tool}</li>
                    ))}
                </ul>
            </div>

            <div className="section">
                <h2 className="section-heading">Skills Gained</h2>
                <ul className="list">
                    {skills?.map((skill, idx) => (
                        <li key={idx} className="list-item">{skill}</li>
                    ))}
                </ul>
            </div>

            <div className="link-wrapper">
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                >
                    View Project Source
                </a>
            </div>
        </div>
    );
};

export default ProjectDetails;

