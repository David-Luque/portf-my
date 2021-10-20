import * as React from 'react';
import Button from './Button';

const ProjectCard = ({ projectInfo })=>{

    const { name, description, project_image, gitHub_link, publicURL } = projectInfo;

    return (
        <li className="section-projects__project-card">
            <h5 className="section-projects__card-title">{name}</h5>
            <p className="section-projects__card-description">{description}</p>
            <img className="section-projects__card-img" src={project_image} alt={`${name} preview`}/>
            <Button
                link={publicURL}
                text="Preview"
                classToHTML="button--url"
            />
            <Button
                link={gitHub_link}
                text="GitHub Repo"
                classToHTML="button--github"
            />
        </li>
    )
};

export default ProjectCard;