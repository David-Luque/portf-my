import * as React from 'react';

const ProjectCard = ({ projectInfo })=>{

    const { name, description, project_image, gitHub_link, publicURL } = projectInfo;

    return (
        <li>
            <h5>{name}</h5>
            <p>{description}</p>
            <img src={project_image} alt={`${name} preview`}/>
            <a href={publicURL}>preview url</a>
            <a href={gitHub_link}>github repo</a>
        </li>
    )
};

export default ProjectCard;