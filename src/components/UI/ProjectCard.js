import * as React from 'react';
import Button from './Button';

const ProjectCard = ({ projectInfo })=>{

    const { name, description, project_image, gitHub_link, publicURL } = projectInfo;

    return (
        <li>
            <h5>{name}</h5>
            <p>{description}</p>
            <img src={project_image} alt={`${name} preview`}/>
            <Button
                link={publicURL}
                text="Preview"
            />
            <Button
                link={gitHub_link}
                text="GitHub Repo"
            />
        </li>
    )
};

export default ProjectCard;