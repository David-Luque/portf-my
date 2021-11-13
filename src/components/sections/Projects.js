import * as React from 'react';
import ProjectCard from '../UI/ProjectCard';
import projectsData from '../../projectsData';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


const Projects = () => {

    const { ref, inView, entry } = useInView({
        threshold: 1
    });
    
    const renderProjects = ()=>{
        let count = 0;
        return projectsData.map((project, index) => {
            count ++;
            return (
                <ProjectCard
                    key={index}
                    projectInfo={project}
                    cardNumber={count}
                />
            )
        })
    };

    useEffect(()=>{
        if(inView === true && entry.isIntersecting === true) {
            entry.target.classList.add('section-projects__title-animation');
        }
    }, [ inView ]);


    return (
        <section id="projects" className="section-projects" >
            <h2 ref={ref} className="section-projects__title heading-secondary margin-bottom-md3">
                Proyectos
            </h2>
            <ul className="section-projects__content">
                {renderProjects()}
            </ul>
        </section>
    );
};
 
export default Projects;