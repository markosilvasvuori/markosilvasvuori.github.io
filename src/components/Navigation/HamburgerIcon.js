import classes from './HamburgerIcon.module.scss';

const HamburgerIcon = ({ onClick, menuOpen }) => {
    return (
        <button 
            className={`${classes.hamburger} ${menuOpen ? classes.open : ''}`}
            onClick={onClick}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

export default HamburgerIcon;