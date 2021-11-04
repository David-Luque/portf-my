import * as React from 'react';
import ProjectCard_Eng from '../UI/ProjectCard_Eng';
import projectsData from '../../projectsData';



const Projects = () => {
    
    const renderProjects = ()=>{
        return projectsData.map((project, index) => (
            <ProjectCard_Eng
                key={index}
                projectInfo={project}
            />
        ))
    };

    return (
        <section id="projects" className="section-projects">
            <h2 className="heading-secondary">Projects</h2>
            <ul className="section-projects__content">
                {renderProjects()}
            </ul>
        </section>
    );
};
 
export default Projects;