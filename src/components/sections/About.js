import * as React from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


const About = () => {

    const { ref, inView, entry } = useInView({
        threshold: 0.2
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
                    Sobre mí
                </h2>
                <div className="section-about__text">
                    <p>
                        Tras pasar por la educación universitaria y no encontrar satisfacción en la metodología y conocimientos que se impartían, sentí la necesidad de aprender por mi cuenta. Desde entonces mi formación ha sido principalmente autodidacta.
                    </p>
                    <p>
                        Mi misión como desarrollador web es generar un gran impacto positivo y aportar el máximo valor con mi trabajo; crecer, profundizar y desarrollar mis conocimientos; trabajar y conocer múltiples herramientas y tecnologías; contribuir a un buen clima en el equipo de trabajo gracias a mi naturaleza conciliadora, y aportar mi perspectiva personal y única para afrontar desafíos.
                    </p>
                    <p>
                        Mis principios son: honestidad, colaboración, ética, humildad y vocación de servicio.
                        Soy una persona curiosa por naturaleza, me gusta no sólo entender la parte práctica sino también el porqué de las cosas.
                    </p>
                </div>
            </div>
        </section>
    );
}
 
export default About;