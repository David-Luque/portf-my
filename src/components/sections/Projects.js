import * as React from 'react';
// import ImageViewer from '../UI/ImageViewer';
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
        <section id="projects" className="section-projects" >
            <h2 className="section-projects__title heading-secondary">Proyectos</h2>
            <ul className="section-projects__content">
                {renderProjects()}
            </ul>
            {/* <ImageViewer/> */}
        </section>
    );
};
 
export default Projects;