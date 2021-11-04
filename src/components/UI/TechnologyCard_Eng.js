import * as React from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const TechnologyCard = ({ title, technologies })=>{

    const renderParagraphs = ()=>{
        return technologies.map((tech, index) => (
            <p className="technology-card__tech" key={index}>
                {tech}
            </p>
        ))
    };

    const { ref, inView, entry } = useInView({
        threshold: 0.5
    });

    useEffect(()=>{
        if(inView === true && entry.isIntersecting === true) {
            entry.target.classList.add('technology-card-animation')
        }
    }, [ inView ]);

    return (
        <li ref={ref} className="technology-card">
            <h3 className="heading-tertiary heading-tertiary--light">
                {title.eng}
            </h3>
            {renderParagraphs()}
        </li>
    )
};

export default TechnologyCard;