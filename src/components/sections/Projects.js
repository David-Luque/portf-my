import * as React from 'react';
import ProjectCard from '../UI/ProjectCard';
import projectsData from '../../projectsData';



const Projects = () => {
    
    const renderProjects = ()=>{
        return projectsData.map((project, index) => (
            <ProjectCard
                key={index}
                projectInfo={project}
            />
        ))
    };

    return (
        <section id="projects" className="section-projects">
            <h2 className="heading-secondary">My projects</h2>
            <ul className="section-projects__content">
                {renderProjects()}
            </ul>
        </section>
    );
};
 
export default Projects;