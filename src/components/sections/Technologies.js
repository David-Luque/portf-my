import * as React from 'react';
import technologiesData from '../../technologiesData';
import TechnologyCard from '../UI/TechnologyCard';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


const Technologies = () => {

    const { ref, inView, entry } = useInView({
        threshold: 1
    });

    useEffect(()=>{
        if(inView === true && entry.isIntersecting === true) {
            entry.target.classList.add('section-technologies__title-animation');
        }
    }, [ inView ]);


    const renderTechCards = ()=>{
        return technologiesData.map((elem, index) => (
            <TechnologyCard
                key={index}
                title={elem.title.esp}
                technologies={elem.techs}
            />
        ));
    };


    return (
        <section id="technologies" className="section-technologies">
            <h2 ref={ref} className="section-technologies__title heading-secondary heading-secondary--light margin-bottom-md4">
                Tecnologías
            </h2>
            <ul className="section-technologies__content">
                {renderTechCards()}
            </ul>
        </section>
    );
}
 
export default Technologies;