import classes from './Heading.module.scss';

const Heading = ({ heading, children }) => {
    return (
        <h2 className={classes.heading}>
            {children}
            {/* <span className={classes.front}>{heading}</span>
            <span className={classes.back}>{heading}</span> */}
        </h2>
    );
};

export default Heading;