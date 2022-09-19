import MainNavLinks from './MainNavLinks';
import classes from './MobileNav.module.scss';

const MobileNav = ({ closeMobileNav, mobileNavVisible }) => {
    const styles = `${classes['mobile-nav']} ${mobileNavVisible ? classes.open : ''}`;

    return (
        <div className={styles}>
            <MainNavLinks closeMobileNav={closeMobileNav} />
        </div>
    );
};

export default MobileNav;