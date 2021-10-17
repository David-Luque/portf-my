import * as React from 'react';
import styled from '@emotion/styled';
import gitHubIcon from '../../images/github-icon.jpeg';
import linkedInIcon from '../../images/LinkedIn_icon.jpg';

const FooterStyled = styled.footer`
    box-sizing: border-box;
    width: 100%;
    height: auto;
    background-color: #36454F;
    color: #D3D3D3;
    text-align: center;
    font-size: 1rem;

    h4 {
        padding: 2.5rem;
        margin: 0;
    }

    .contact-info p {
        margin: .5rem;
        text-align: left;
    }

    .social-media {
        p {
            margin: .5rem;
        }

        a {
            margin: .5rem;

            img {
            width: 2.5rem;
            height: 2.5rem;
        }
        }

        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <FooterStyled>
            <h4>Develop by David - All rights reserved &copy; - {year} </h4>
            <div className="contact-info">
                <p>dvdlq99@gmail.com</p>
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/david-luque-alba/" target="_blank">
                        <img src={linkedInIcon} alt="linkedIn icon"/>
                    </a>
                    <a href="https://github.com/David-Luque" target="_blank">
                        <img src={gitHubIcon} alt="GitHub icon"/>
                    </a>
                </div>
                    
            </div>
        </FooterStyled>
    );
}
 
export default Footer;