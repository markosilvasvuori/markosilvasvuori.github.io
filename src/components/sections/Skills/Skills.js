import SectionTemplate from "../../Layout/SectionTemplate";
import classes from './Skills.module.scss';

const Skills = () => {
    return (
        <SectionTemplate sectionId={'skills'} className={classes.section}>
            <h2 className={classes.heading}>Skills</h2>
            <div className={classes.container}>
                <div className={classes.skills}>
                    <div className={classes['skills-list']}>
                        <h5>Languages</h5>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div className={classes['skills-list']}>
                        <h5>Frameworks</h5>
                        <ul>
                            <li>React</li>
                        </ul>
                    </div>
                    <div className={classes['skills-list']}>
                        <h5>Tools</h5>
                        <ul>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Chrome DevTools</li>
                        </ul>
                    </div>
                </div>
            </div>
        </SectionTemplate>
    );
};

export default Skills;