import React from 'react';
import Header from './components/Header';
import ProjectSection from './components/ProjectSection.jsx';
import { javaProjects, jupyterProjects, frontEndProjects } from './data/projects';

const App = () => {
    return (
        <div className="container">
            <meta name="description" content="I am a young passionate programmer interested in software development and data science" />
            <Header title="Donda Khumalo Portfolio" />
            <ProjectSection title="Java Projects" projects={javaProjects} />
            <ProjectSection title="Jupyter Notebooks" projects={jupyterProjects} />
            <ProjectSection title="Front End Dev" projects={frontEndProjects} />
        </div>
    );
};

export default App;
