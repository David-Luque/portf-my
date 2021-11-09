import * as React from 'react';
import Button from './Button';
import ImageViewer from './ImageViewer';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


const ProjectCard = ({ projectInfo, cardNumber })=>{

    const { ref, inView, entry } = useInView({
        threshold: 0.5
    });

    useEffect(()=>{
        if(inView === true && entry.isIntersecting === true) {
            entry.target.classList.add('project-card-animation')
        }
    }, [ inView ]);

    const { name, description_esp, project_image, gitHub_links, publicURL } = projectInfo;

    const renderLinkButtons = ()=>{
        if(gitHub_links.length === 1) {
            return (
                <Button
                    link={gitHub_links[0]}
                    text="Repo GitHub"
                    classToHTML=" button button--github"
                />
            )
        }
        
        return (
            <>
                <Button
                    link={gitHub_links[0]}
                    text="Codigo UI"
                    classToHTML=" button button--github"
                />
                <Button
                    link={gitHub_links[1]}
                    text="Codigo API"
                    classToHTML=" button button--github"
                />
            </>
            
        )
    };


    const handleTurnCard = (target)=>{

        const projectCards = document.querySelectorAll('.project-card');

        projectCards.forEach(card => {
            if(card.classList[1] ===  target.classList[1] && card.classList[ card.classList.length - 1 ] === 'project-card-animation') {
                card.classList.add('project-card--turned')
            } else {
                card.classList.remove('project-card--turned')
            }
        })
    };

    return (
        <li ref={ref} className={`project-card ${cardNumber}`}>
            <div className="project-card__side project-card__side--front">
                <h5 className="project-card__title">{name}</h5>
                <p className="project-card__description">{description_esp}</p>
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
            <div className="image-viewer"></div>
        </li>
    )
};

export default ProjectCard;