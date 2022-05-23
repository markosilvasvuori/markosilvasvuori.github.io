import Section from "../Layout/Section";
import Heading from "../UI/Heading";
import classes from './Skills.module.scss';

const Skills = () => {
    return (
        <Section
            sectionId={'skills'}
            leftContent={'</skills>'}
            rightContent={'<contact>'}
        >
            <div className={classes.container}>
            <Heading>Skills</Heading>
            <div className={classes.categories}>
                <div className={classes.category}>
                        <h3>
                            <span>01</span>
                            <span>Languages</span>
                        </h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div className={classes.category}>
                        <h3>
                            <span>02</span>
                            <span>Tools</span>
                        </h3>
                        <ul>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Chrome DevTools</li>
                        </ul>
                    </div>
                    <div className={classes.category}>
                        <h3>
                            <span>03</span>
                            <span>Frameworks</span>
                        </h3>
                        <ul>
                            <li>React</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Skills;