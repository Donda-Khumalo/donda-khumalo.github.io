import React from 'react';
import { useLocation } from 'react-router-dom';
import ProjectDetails from '../components/ProjectDetails';
import { javaProjects, jupyterProjects, frontEndProjects } from '../data/projects';

const Details = () => {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const name = params.get('name');

    const allProjects = [...javaProjects, ...jupyterProjects, ...frontEndProjects];
    const project = allProjects.find(p => p.title === name);

    // If no project name or project not found, show all projects
    if (!name || !project) {
        return (
            <div className="details-page-container" style={{ padding: '24px', maxWidth: '900px', margin: 'auto' }}>
                <h1 style={{ textAlign: 'center', fontSize: '2.25rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                    All Projects
                </h1>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {allProjects.map((proj, idx) => (
                        <ProjectDetails key={idx} project={proj} />
                    ))}
                </div>
            </div>
        );
    }

    // Otherwise, show the single project details
    return <ProjectDetails project={project} />;
};

export default Details;

