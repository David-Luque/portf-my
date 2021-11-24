import * as React from 'react';
import gitHubIcon from '../../images/github-icon.jpeg';
import linkedInIcon from '../../images/LinkedIn_icon.jpg';
import phoneImg from '../../images/phone.svg';
import resumeImg from '../../images/resume.svg';
import emailImg from '../../images/email.svg';
import resumeFile from '../../../public/static/david-luque-resume-esp.pdf';


const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <h4 className="footer__copyright">Desarrollado por David Luque - Todos los derechos reservados &copy; - {year} </h4>
            <div className="footer__contact-info" id="contact-info">
                <div className="footer__email">
                    <img src={emailImg} alt="Email" className="footer__email-img"/>
                    <a className="footer__email-direction" href="mailto:dvdlq99@gmail.com">
                        dvdlq99@gmail.com
                    </a>  
                </div>
                <div className="footer__phone">
                    <img src={phoneImg} alt="Phone" className="footer__phone-img"/>
                    <a className="footer__phone-number" href="tel:+34622658132">
                        (+34)&nbsp;622658132
                    </a> 
                </div>
                <div className="footer__social-media">
                    <a className="footer__link" href="https://github.com/David-Luque" target="_blank">
                        <img src={gitHubIcon} alt="GitHub icon"/>
                    </a>
                    <a className="footer__link" href="https://www.linkedin.com/in/david-luque-alba/" target="_blank">
                        <img src={linkedInIcon} alt="linkedIn icon"/>
                    </a>
                    <a className="footer__link" href={resumeFile} download>
                        <img className="footer__link-resume" src={resumeImg} alt="Resume"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;