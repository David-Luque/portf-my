import * as React from 'react';
import { Link } from 'gatsby';
import spainFlag from '../../images/spain_flag.png';
import englishFlag from '../../images/UK-USA-flag.png';


const Nav = ()=>{
    return (
        <nav className="navigation">
            <div className="navigation__languages">
                <Link to={'/'} className="navigation__flag">
                    <img src={spainFlag} alt="Spanish language" />
                </Link>
                <Link to={'/eng'} className="navigation__flag">
                    <img src={englishFlag} alt="English language" />
                </Link>
            </div>
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