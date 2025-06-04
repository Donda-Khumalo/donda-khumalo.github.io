import React from 'react';
import Header from './components/Header';
import ProjectSection from './components/ProjectSection.jsx';
import { javaProjects, jupyterProjects, frontEndProjects } from './data/projects';
import {BrowserRouter, Link, Route, Routes, useLocation} from "react-router-dom";
import Projects from "./Projects";
import HomePage from "./Homepage";
import Details from "./Details";
import './index.css';

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
