import Heading from '../UI/Heading';
import picture from '../../img/marko.JPG';
import classes from './About.module.scss';
import Section from '../Layout/Section';

const About = () => {
    return (
        <Section 
            sectionId={'about'}
            leftContent={'</about>'} 
            rightContent={'<projects>'}
        >
            <div className={classes.container}>
                <div className={classes.content}>
                    <Heading>About</Heading>
                    <p>I'm Marko, a self-taught frontend web developer from Tampere, Finland. 
                    In September 2019, I started to study and practice frontend web development and 
                    have been building things and learning more daily ever since.</p>
                </div>
                <div className={classes['picture-container']}>
                    <img 
                        className={classes.picture} 
                        src={picture} 
                        alt='Marko Silvasvuori' 
                    />
                </div>

            </div>
        </Section>
    );
}

export default About;