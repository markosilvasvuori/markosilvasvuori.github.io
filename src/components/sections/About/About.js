import SectionTemplate from "../../Layout/SectionTemplate";
import classes from './About.module.scss';

const About = () => {
    return (
        <SectionTemplate sectionId={'about'} className={classes.section}>
            <h2 className={classes.heading}>About</h2>
            <div className={classes.container}>
                <p>Hello! My name is Marko and I'm a frontend web developer from Tampere, Finland. My interest in coding started back in 2014 when I created a video game on my own. I used GameMaker Studio and its GML language for that. After finishing and releasing the game I ventured to other things, like running an e-commerce store. In 2019 I decided to get back to coding and started to study frontend development on my own. I mainly used TeamTreehouse.com, Udemy and FreeCodeCamp for learning. I have kept building things and learning more since then.</p>
            </div>
        </SectionTemplate>
    );
};

export default About;