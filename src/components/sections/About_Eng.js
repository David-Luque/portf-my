import * as React from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


const About = () => {

    const { ref, inView, entry } = useInView({
        threshold: 0.5
    });

    const [ ref2, inView2, entry2 ] = useInView({
        threshold: 1
    });

    useEffect(()=>{        
        if(inView === true && entry.isIntersecting === true) {
            entry.target.classList.add('section-about__content-animation')
        }

        if(inView2 === true && entry2.isIntersecting === true) {
            entry2.target.classList.add('section-about__title-animation');
        }
    }, [ inView, inView2 ]);


    return (
        <section id="about" className="section-about">
            <div ref={ref} className="section-about__content">
                <h2 ref={ref2} className="section-about__title heading-secondary margin-bottom-md4">
                    About me
                </h2>
                <div className="section-about__text">
                    <p>
                        After going through university education and not finding satisfaction in the methodology and knowledge that was taught, I felt the need to learn on my own. Since then my training has been mainly self-taught.
                    </p>
                    <p>
                        My mission as a web developer is to generate a great positive impact and bring maximum value with my work; to grow, deepen and develop my knowledge; to work and learn multiple tools and technologies; to contribute to a good work team climate thanks to my conciliatory nature; and to bring my personal and unique perspective to face challenges.
                    </p>
                    <p>
                        My principles are: honesty, collaboration, ethics, humility and dedication to service.
                        I am a curious person by nature, I like not only to understand the practical side but also the why of things.
                    </p>
                </div>
            </div>
        </section>
    );
}
 
export default About;