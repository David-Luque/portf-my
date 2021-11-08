import * as React from 'react';
import ProjectCard from '../UI/ProjectCard';
import projectsData from '../../projectsData';



const Projects = () => {
    
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


    return (
        <section id="projects" className="section-projects">
            <h2 className="heading-secondary">Proyectos</h2>
            <ul className="section-projects__content">
                {renderProjects()}
            </ul>
        </section>
    );
};
 
export default Projects;