import { HashLink as Link } from 'react-router-hash-link';

import classes from './MainNav.module.scss';

const MainNav = ({ menuOpen, closeMenu }) => {
    return (
        <nav className={`${classes.nav} ${menuOpen ? classes.open : ''}`}>
            <ul>
                <li style={{ animationDelay: '0.2s' }}>
                    <Link 
                        smooth 
                        to='#about' 
                        onClick={closeMenu}
                    >
                        About
                    </Link>
                </li>
                <li style={{ animationDelay: '0.3s' }}>
                    <Link 
                        smooth 
                        to='#projects'
                        onClick={closeMenu}
                    >
                        Projects
                    </Link>
                </li>
                <li style={{ animationDelay: '0.4s' }}>
                    <Link 
                        smooth 
                        to='#skills'
                        onClick={closeMenu}
                    >
                        Skills
                    </Link>
                </li>
                <li style={{ animationDelay: '0.5s' }}>
                    <Link 
                        smooth 
                        to='#contact'
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default MainNav;