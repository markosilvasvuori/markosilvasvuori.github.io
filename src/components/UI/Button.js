import classes from './Button.module.scss';

const Button = ({ onClick, outlined, children }) => {
    return (
        <button 
            className={`${classes.button} ${outlined ? classes.outlined : ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;