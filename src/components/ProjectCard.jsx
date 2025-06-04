import React from 'react';
import {Link} from "react-router-dom";


const ProjectCard = ({title, description, location}) => (
    <Link to={location}>
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </Link>
);




export default ProjectCard;
