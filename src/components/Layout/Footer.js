import classes from './Footer.module.scss';

const Footer = () => {
    const getYear = () => {
        const date = new Date();
        return date.getFullYear();

    };

    return (
        <footer className={classes.footer}>
            <p>&copy; Marko Silvasvuori {getYear()}</p>
        </footer>
    );
};

export default Footer;