import { HashLink } from 'react-router-hash-link';
import classes from './MainNavLinks.module.scss';

const MainNavLinks = ({ closeMobileNav }) => {
    return (
        <nav className={classes.links}>
            <ul>
                <li onClick={closeMobileNav}>
                    <HashLink to='#projects' smooth>Projects</HashLink>
                </li>
                <li onClick={closeMobileNav}>
                    <HashLink to='#about' smooth>About</HashLink>
                </li>
                <li onClick={closeMobileNav}>
                    <HashLink to='#skills' smooth>Skills</HashLink>
                </li>
                <li onClick={closeMobileNav}>
                    <HashLink to='#contact' smooth>Contact</HashLink>
                </li>
            </ul>
        </nav>
    );
};

export default MainNavLinks;