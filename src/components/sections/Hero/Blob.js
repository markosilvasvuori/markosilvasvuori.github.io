import classes from './Blob.module.scss';

const Blob = ({ width, height, backgroundColor, movementOne = true}) => {
    const movement = movementOne ? classes.movementOne : classes.movementTwo
    const styles = `${classes.blob} ${movement}`;

    return (
        <div 
            className={styles}
            style={{
                width: width,
                height: height,
                backgroundColor: backgroundColor,
            }}
        ></div>
    );
};

export default Blob;