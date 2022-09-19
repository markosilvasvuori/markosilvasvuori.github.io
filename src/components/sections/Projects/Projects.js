import { useState } from 'react';
import { projectsArray } from '../../../projectsArray';
import SectionTemplate from '../../Layout/SectionTemplate';
import Button from '../../UI/Button';
import Project from './Project';
import classes from './Projects.module.scss';

const Projects = () => {
    const projectsCopy = [...projectsArray];
    const defaultVisible = projectsCopy.slice(0, 3);
    const [visibleProjects, setVisibleProjects] = useState(defaultVisible);

    const handleShowMore = () => {
        setVisibleProjects(visibleProjects.length > defaultVisible.length ? defaultVisible : projectsCopy);
    };

    return (
        <SectionTemplate 
            sectionId={'projects'}
            className={classes.projects}
        >
            <h2 className={classes.sticky}>Projects</h2>
            <div className={classes.container}>
                {visibleProjects.map((project, index) => (
                    <Project 
                        key={index}
                        image={project.image}
                        title={project.title}
                        technologies={project.technologies}
                        description={project.description}
                        liveLink={project.liveLink}
                        gitHubLink={project.gitHubLink}
                    />
                ))}
                <Button onClick={handleShowMore}>
                    {visibleProjects.length === defaultVisible.length && 'Show more'}
                    {visibleProjects.length > defaultVisible.length && 'Show less'}
                </Button>
            </div>
        </SectionTemplate>
    );
};

export default Projects;