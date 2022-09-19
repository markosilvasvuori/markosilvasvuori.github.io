import classes from './Hamburger.module.scss';

const Hamburger = ({ onClick, mobileNavVisible }) => {
    const styles = `${classes.hamburger} ${mobileNavVisible ? classes.open : ''}`;

    return (
        <button 
            className={styles}
            onClick={onClick}    
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

export default Hamburger;