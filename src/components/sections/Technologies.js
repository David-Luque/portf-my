import * as React from 'react';
// import { useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
import technologiesData from '../../technologiesData';
import TechnologyCard from '../UI/TechnologyCard';


const Technologies = () => {

    // const { ref, inView, entry } = useInView({
    //     threshold: 0.5
    // });

    // useEffect(()=>{
    //     console.log(ref)
    //     console.log(inView)
    //     console.log(entry)

    //     if(inView === true && entry.isIntersecting === true) {
    //         entry.target.classList.add('section-technologies__block-animation')
    //     }
    // }, [ inView ]);


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
        <section id="technologies" className="section-technologies">
            <h2 className="heading-secondary heading-secondary--light">
                Technologies
            </h2>
            <ul className="section-technologies__content">
                {renderTechCards()}
            </ul>
        </section>
    );
}
 
export default Technologies;