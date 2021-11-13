import * as React from 'react';
import Button from './Button';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { expandPicture, handleTurnCard } from '../../helpers';


const ProjectCard = ({ projectInfo, cardNumber })=>{

    const { ref, inView, entry } = useInView({
        threshold: 0.5
    });

    useEffect(()=>{
        if(inView === true && entry.isIntersecting === true) {
            entry.target.classList.add('project-card-animation')
        }
    }, [ inView ]);

    const { name, description_eng, project_image, gitHub_links, publicURL } = projectInfo;

    const renderLinkButtons = ()=>{
        if(gitHub_links.length === 1) {
            return (
                <Button
                    link={gitHub_links[0]}
                    text="GitHub repo"
                    classToHTML=" button button--github"
                />
            )
        }
        
        return (
            <>
                <Button
                    link={gitHub_links[0]}
                    text="UI Code"
                    classToHTML=" button button--github"
                />
                <Button
                    link={gitHub_links[1]}
                    text="API Code"
                    classToHTML=" button button--github"
                />
            </>
            
        )
    };


    return (
        <li ref={ref} className={`project-card ${cardNumber}`} onLoad={() => expandPicture()}>
            <div className="project-card__side project-card__side--front">
                <div className="project-card__details">
                    <h5 className="project-card__title margin-bottom-md3">{name}</h5>
                    <p className="project-card__description">{description_eng}</p>
                </div>
                <button className={`project-card__button-text ${cardNumber} project-card__button-text-front`} onClick={(e)=> handleTurnCard(e.target)}>
                    + Info &rarr;
                </button>
            </div>
            <div className="project-card__side project-card__side--back">
                <img className="project-card__img" src={project_image} alt={`${name} preview`}/>
                <div className="project-card__buttons">
                    <Button
                        link={publicURL}
                        text="Demo"
                        classToHTML="button button--url"
                    />
                    {renderLinkButtons()}
                </div>
                <button className={`project-card__button-text ${cardNumber} project-card__button-text-back`} onClick={(e)=> handleTurnCard(e.target)}>
                    &larr; Back
                </button>
            </div>
        </li>
    )
};

export default ProjectCard;