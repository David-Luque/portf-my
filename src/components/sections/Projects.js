import * as React from 'react';
import styled from '@emotion/styled';
import ProjectCard from '../layout/ProjectCard';
import projectsData from '../../projectsData';

const ProjectStyled = styled.section`
    width: 100%;
    height: auto;
    background-color: #4F7942;
    color: whitesmoke;
    text-align: center;

    ul {
        list-style: none;

        li {
            background-color: rgba(0,0,0,.15);
            padding: 2rem;
            margin: .6rem;
            border-radius: 5px;
        }
    }

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
`;

const renderProjects = ()=>{
    return projectsData.map((project, index) => (
        <ProjectCard
            key={index}
            projectInfo={project}
        />
    ))
};

const Projects = () => {
    return (
        <ProjectStyled id="projects">
            <h2>My projects</h2>
            <ul>
                {renderProjects()}
            </ul>
        </ProjectStyled>
    );
};
 
export default Projects;