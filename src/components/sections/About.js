import * as React from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


const About = () => {

    const { ref, inView, entry } = useInView({
        threshold: 0.5
    });

    useEffect(()=>{
        // const observer = new IntersectionObserver(entries => {
        //     entries.forEach(entry => {
        //         //const section = entry.target.querySelector('.section-about__content')
        //         if(entry.isIntersecting) {
        //             entry.target.classList.add('.section-about__content-animation')
        //         }
        //     })
        // });
        // observer.observe(document.querySelector('.section-about__content'))
        
        if(inView === true && entry.isIntersecting === true) {
            entry.target.classList.add('section-about__content-animation')
        }
    }, [inView]);


    return (
        <section id="about" className="section-about">
            <div ref={ref} className="section-about__content">
                <h2 className="heading-secondary">About me</h2>
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