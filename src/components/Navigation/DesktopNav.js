import MainNavLinks from './MainNavLinks';
import classes from './DesktopNav.module.scss';

const DesktopNav = () => {
    return (
        <nav className={classes['desktop-nav']}>
            <MainNavLinks />
        </nav>
    );
};

export default DesktopNav;