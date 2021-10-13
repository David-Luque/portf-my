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
`;

const Footer = () => {
    return (
        <FooterStyled>
            <h4>Develop by David - All rights reserved </h4>
        </FooterStyled>
    );
}
 
export default Footer;