import Heading from '../UI/Heading';
import classes from './Welcome.module.scss';

const Welcome = () => {
    return (
        <div className={classes.welcome}>
            <div className={classes.container}>
                <div className={classes.hello}>
                    Hello<span className={classes.highlight}>.</span>
                </div>
            </div>
        </div>
    );
};

export default Welcome;