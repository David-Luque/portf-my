import * as React from 'react';
import Button from './Button';

const ProjectCard = ({ projectInfo })=>{

    const { name, description, project_image, gitHub_links, publicURL } = projectInfo;

    const renderLinkButtons = ()=>{
        return gitHub_links.map(link => (
            <Button
                link={link}
                text="GitHub repo"
                classToHTML=" button button--github"
            />
        ))
    };


    return (
        <li className="project-card">
            <h5 className="project-card__title">{name}</h5>
            <p className="project-card__description">{description}</p>
            {/* <img className="project-card__img" src={project_image} alt={`${name} preview`}/> */}
            <div className="project-card__buttons">
                <Button
                    link={publicURL}
                    text="Preview"
                    classToHTML="button button--url"
                />
                {renderLinkButtons()}
            </div>
                
        </li>
    )
};

export default ProjectCard;