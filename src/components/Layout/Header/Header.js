import { useState } from 'react';

import DesktopNav from '../../Navigation/DesktopNav';
import Hamburger from '../../Navigation/Hamburger';
import MobileNav from '../../Navigation/MobileNav';
import classes from './Header.module.scss';

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleShowMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
        document.body.classList.toggle('no-scroll')
    };

    return (
        <header className={classes.header}>
            <div className={classes.logo}>MS</div>
            <Hamburger 
                onClick={handleShowMobileMenu} 
                mobileNavVisible={showMobileMenu} 
            />
            <MobileNav 
                closeMobileNav={handleShowMobileMenu} 
                mobileNavVisible={showMobileMenu}
            />
            <DesktopNav />
        </header>
    );
};

export default Header;