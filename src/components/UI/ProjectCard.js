import * as React from 'react';
import Button from './Button';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


const ProjectCard = ({ projectInfo })=>{

    const { ref, inView, entry } = useInView({
        threshold: 0.5
    });

    useEffect(()=>{
        if(inView === true && entry.isIntersecting === true) {
            entry.target.classList.add('project-card-animation')
        }
    }, [ inView ]);

    const { name, description, project_image, gitHub_links, publicURL } = projectInfo;

    const renderLinkButtons = ()=>{
        return gitHub_links.map((link, index)=> (
            <Button
                key={index}
                link={link}
                text="GitHub repo"
                classToHTML=" button button--github"
            />
        ))
    };


    return (
        <li ref={ref} className="project-card">
            <h5 className="project-card__title">{name}</h5>
            <p className="project-card__description">{description}</p>
            {/* <img className="project-card__img" src={project_image} alt={`${name} preview`}/> */}
            <div className="project-card__buttons">
                <Button
                    link={publicURL}
                    text="Demo"
                    classToHTML="button button--url"
                />
                {renderLinkButtons()}
            </div>
                
        </li>
    )
};

export default ProjectCard;