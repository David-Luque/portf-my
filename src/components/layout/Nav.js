import * as React from 'react';
import { Link } from 'gatsby';


const Nav = ()=>{
    return (
        <nav className="navigation">
            <ul className="navigation__list">
            <li>
                <Link to={'#about'} className="navigation__link">
                    About me
                </Link>
            </li>
            <li>
                <Link to={'#technologies'} className="navigation__link">
                    Technologies
                </Link>
            </li>
            <li>
                <Link to={'#projects'} className="navigation__link">
                    Projects
                </Link>
            </li>
            </ul>
        </nav>
    );
};

export default Nav;