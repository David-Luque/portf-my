import * as React from 'react';
import { Link } from 'gatsby';
import spainFlag from '../../images/spain_flag.png';
import englishFlag from '../../images/UK-USA-flag.png';
import { handleNav } from '../../helpers';


const Nav = ()=>{
    
    return (
        <nav className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="nav-toggle" onClick={handleNav}/>
            <label htmlFor="nav-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>
            <div className="navigation__content">
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
                        <Link to={'#about'} className="navigation__link" onClick={handleNav}>
                            About me
                        </Link>
                    </li>
                    <li>
                        <Link to={'#technologies'} className="navigation__link" onClick={handleNav}>
                            Technologies
                        </Link>
                    </li>
                    <li>
                        <Link to={'#projects'} className="navigation__link" onClick={handleNav}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to={'#contact-info'} className="navigation__link" onClick={handleNav}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    );
};

export default Nav;