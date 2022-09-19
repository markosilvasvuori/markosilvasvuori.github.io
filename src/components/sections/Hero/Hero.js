import { useState, useEffect } from 'react';

import Blob from './Blob';
import classes from './Hero.module.scss';
import profileImg from '../../../img/marko.jpg';

const Hero = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const tabletSize = 768;

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [windowWidth]);

    return (
        <section className={classes.hero}>
            <h1>
                <span>Hello!</span>
                <span>I am Marko</span>
                <span>Silvasvuori</span>
                <span>Frontend</span>
                <span>Developer</span>
            </h1>
            <div className={classes['image-container']}>
                <img src={profileImg} alt='Marko Silvasvuori' />
            </div>
            {/* <div className={classes.blobs}>
                <Blob
                    width={windowWidth < tabletSize ? '40vw' : '28vw'}
                    height={windowWidth < tabletSize ? '35vw' : '24vw'}
                    backgroundColor={'gray'}
                />
                <Blob
                    width={windowWidth < tabletSize ? '38vw' : '30vw'}
                    height={windowWidth < tabletSize ? '34vw' : '25vw'}
                    backgroundColor={'gray'}
                    movementOne={false}
                />

                <Blob
                    width={windowWidth < tabletSize ? '45vw' : '32vw'}
                    height={windowWidth < tabletSize ? '40vw' : '28vw'}
                    backgroundColor={'gray'}
                    movementOne={windowWidth < tabletSize ? true : false}
                />
            </div> */}
        </section>
    );
};

export default Hero;