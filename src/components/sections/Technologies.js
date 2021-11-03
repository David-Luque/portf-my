import * as React from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import technologiesData from '../../technologiesData';
import TechnologyCard from '../UI/TechnologyCard';
import { typeEffect } from '../../helpers';


const Technologies = () => {

    const { ref, inView, entry } = useInView({
        threshold: 0.2
    });

    useEffect(()=>{
        if(inView === true && entry.isIntersecting === true) {
            typeEffect("section-technologies", 'Technologies', 100);
        }
    }, [ inView ]);


    const renderTechCards = ()=>{
        return technologiesData.map((elem, index) => (
            <TechnologyCard
                key={index}
                title={elem.title}
                technologies={elem.techs}
            />
        ));
    };


    return (
        <section ref={ref} id="technologies" className="section-technologies">
            <h2  id="section-technologies" className="heading-secondary heading-secondary--light">
                &nbsp;
            </h2>
            <ul className="section-technologies__content">
                {renderTechCards()}
            </ul>
        </section>
    );
}
 
export default Technologies;