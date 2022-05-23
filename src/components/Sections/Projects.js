import { useState } from 'react';

import { projectsArray } from '../../projectsArray';
import Section from "../Layout/Section";
import Project from "../Project/Project";
import Heading from "../UI/Heading";
import Button from '../UI/Button';
import classes from './Projects.module.scss';

const Projects = () => {
    const [visibleProjects, setVisibleProjects] = useState(3);

    const visibleProjectsHandler = () => {
        if (visibleProjects > 3) {
            setVisibleProjects(3);
        } else {
            setVisibleProjects(projectsArray.length);
        }
    };
    
    return (
        <Section 
            sectionId={'projects'}
            leftContent={'</projects>'} 
            rightContent={'<skills>'}
        >
            <Heading>Projects</Heading>
            <div className={classes.projects}>
                {projectsArray.slice(0, visibleProjects).map((project, index) => (
                    <Project 
                        key={index}
                        imgSrc={project.imgSrc}
                        title={project.title}
                        technologies={project.technologies}
                        description={project.description}
                        liveLink={project.liveLink}
                        gitHubLink={project.gitHubLink}
                    />
                ))}
            </div>
            <Button onClick={visibleProjectsHandler}>
                {visibleProjects === 3 && 'Show More'}
                {visibleProjects > 3 && 'Show Less'}
            </Button>
        </Section>
    );
};

export default Projects;