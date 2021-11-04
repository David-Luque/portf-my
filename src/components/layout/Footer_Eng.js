import * as React from 'react';
import gitHubIcon from '../../images/github-icon.jpeg';
import linkedInIcon from '../../images/LinkedIn_icon.jpg';


const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <h4 className="footer__copyright">Develop by David Luque - All rights reserved &copy; - {year} </h4>
            <div className="footer__contact-info">
                <p className="footer__email">dvdlq99@gmail.com</p>
                <div className="footer__social-media">
                    <a className="footer__link" href="https://www.linkedin.com/in/david-luque-alba/" target="_blank">
                        <img src={linkedInIcon} alt="linkedIn icon"/>
                    </a>
                    <a className="footer__link" href="https://github.com/David-Luque" target="_blank">
                        <img src={gitHubIcon} alt="GitHub icon"/>
                    </a>
                </div>
                    
            </div>
        </footer>
    );
}
 
export default Footer;