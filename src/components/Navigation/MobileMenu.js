import MainNav from "./MainNav";
import classes from './MobileMenu.module.scss';

const MobileMenu = ({ menuOpen, closeMenu }) => {
    return (
        <div className={`${classes.menu} ${menuOpen ? classes.open : ''}`}>
            <MainNav 
                menuOpen={menuOpen} 
                closeMenu={closeMenu}
            />
        </div>
    );
}

export default MobileMenu;