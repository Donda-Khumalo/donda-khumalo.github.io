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
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/details" element={<Details />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;