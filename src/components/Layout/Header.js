import { useState } from 'react';

import HamburgerIcon from '../Navigation/HamburgerIcon';
import MainNav from '../Navigation/MainNav';
import MobileMenu from '../Navigation/MobileMenu';
import classes from './Header.module.scss';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const mobileMenuHandler = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle(classes['no-scroll']);
    };

    return (
        <header className={classes.header}>
            <div className={classes.logo}>MS</div>
            <div className={classes.hamburger}>
                <HamburgerIcon 
                    onClick={mobileMenuHandler} 
                    menuOpen={menuOpen} 
                />
            </div>
                <MobileMenu 
                    menuOpen={menuOpen} 
                    closeMenu={mobileMenuHandler}
                />
            <div className={classes['desktop-nav']}>
                <MainNav />
            </div>
        </header>
    );
}

export default Header;