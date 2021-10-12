import * as React from 'react';
import { Link } from 'gatsby';

const Nav = ()=>{
    return (
        <nav>
            <ul>
                <Link to={'/about'}>
                    <li>About me</li>
                </Link>
                <Link to={'/technologies'}>
                    <li>Technologies</li>
                </Link>
                <Link to={'/projects'}>
                    <li>Projects</li>
                </Link>
                <Link to={'/contact'}>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;