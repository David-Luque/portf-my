import * as React from 'react';
import { Link } from 'gatsby';
import spainFlag from '../../images/spain_flag.png';
import englishFlag from '../../images/UK-USA-flag.png';


const Nav = ()=>{

    const handleNav = ()=>{
        
        const navBackground = document.querySelector('.navigation__background');
        const navContent = document.querySelector('.navigation__content');
        const navButton = document.querySelector('.navigation__button');

        //console.log(navBackground.classList[navBackground.classList.length - 1])
        // console.log(typeof navBackground.classList[0])

        const displayNavElements = ()=>{
            navBackground.classList.add('background--displayed');
            navContent.classList.add('content--displayed');
            navButton.classList.add('button--displayed');
        };
    
        const hideNavElements = ()=>{
            navBackground.classList.remove('background--displayed');
            navContent.classList.remove('content--displayed');
            navButton.classList.remove('button--displayed');
        };
        
        if(navBackground.classList[navBackground.classList.length - 1] === 'background--displayed') {
            hideNavElements();
        } else {
            displayNavElements();
        }

        //console.log(navBackground.classList)
        // console.log(navContent.classList)
        // console.log(navButton.classList)
    };

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
                            Sobre mí
                        </Link>
                    </li>
                    <li>
                        <Link to={'#technologies'} className="navigation__link" onClick={handleNav}>
                            Tecnologías
                        </Link>
                    </li>
                    <li>
                        <Link to={'#projects'} className="navigation__link" onClick={handleNav}>
                            Proyectos
                        </Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    );
};

export default Nav;