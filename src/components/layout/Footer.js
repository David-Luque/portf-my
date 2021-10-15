import * as React from 'react';
import styled from '@emotion/styled';

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

        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Footer = () => {
    return (
        <FooterStyled>
            <h4>Develop by David - All rights reserved </h4>
            <div className="contact-info">
                <p>email</p>
                <div className="social-media">
                    <p>linkedIn icon</p>
                    <p>gitHub icon</p>
                </div>
                    
            </div>
        </FooterStyled>
    );
}
 
export default Footer;