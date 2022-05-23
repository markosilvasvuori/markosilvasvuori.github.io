import { HashLink as Link } from 'react-router-hash-link';

import classes from './Hero.module.scss';
import SectionBottomLine from '../UI/SectionBottomLine';
import buttonStyles from '../UI/Button.module.scss';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.content}>
                <h1>
                    <span>Marko</span>
                    <span>Marko</span>
                    <span>Marko</span>
                    <span>Marko</span>
                    <span>Silvasvuori</span>
                </h1>
                <div className={classes.separator}></div>
                <p>I'm a <span className={classes.highlight}>frontend web developer</span> from Tampere, Finland.</p>
                <div className={classes.buttons}>
                    <Link 
                        smooth
                        className={buttonStyles.button} 
                        to='#projects'
                    >
                        Projects
                    </Link>
                    <Link 
                        smooth
                        className={`${buttonStyles.button} ${buttonStyles.outlined}`} 
                        to='#contact'
                    >
                        Contact
                    </Link>
                </div>
            </div>
            <div className={classes.bottom}>
                <SectionBottomLine 
                    leftContent={'marko.silvasvuori@gmail.com'} 
                    rightContent={'scroll down'}    
                />
            </div>
        </section>
    );
};

export default Hero;