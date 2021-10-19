import * as React from 'react';
import { Link } from 'gatsby';


const Nav = ()=>{
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <Link to={'#about'} className="navigation__link">
                    <li>About me</li>
                </Link>
                <Link to={'#technologies'} className="navigation__link">
                    <li>Technologies</li>
                </Link>
                <Link to={'#projects'} className="navigation__link">
                    <li>Projects</li>
                </Link>
                <Link to={'#contact'} className="navigation__link">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;