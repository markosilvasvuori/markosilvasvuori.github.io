import classes from './Footer.module.scss';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={classes.footer}>
            <p>&copy; Marko Silvasvuori {year}</p>
        </footer>
    );
};

export default Footer;