import * as React from 'react';
import technologiesData from '../../technologiesData';
import TechnologyCard_Eng from '../UI/TechnologyCard_Eng';
// import { useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
// import { typeEffect } from '../../helpers';


const Technologies = () => {

    // const { ref, inView, entry } = useInView({
    //     threshold: 1
    // });

    // useEffect(()=>{
    //     if(inView === true && entry.isIntersecting === true) {
    //         typeEffect("section-technologies", 'Technologies', 2000);
    //     }
    // }, [ inView ]);


    const renderTechCards = ()=>{
        return technologiesData.map((elem, index) => (
            <TechnologyCard_Eng
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