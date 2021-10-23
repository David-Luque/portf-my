import * as React from 'react';
import Button from './Button';

const ProjectCard = ({ projectInfo })=>{

    const { name, description, project_image, gitHub_links, publicURL } = projectInfo;

    const renderLinkButtons = ()=>{
        return gitHub_links.map(link => (
            <Button
                link={link}
                text="GitHub repo"
                className="button--github"
            />
        ))
    };


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
            {renderLinkButtons()}
        </li>
    )
};

export default ProjectCard;