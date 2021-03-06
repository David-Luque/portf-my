import * as React from 'react';
import Nav_Eng from './Nav_Eng';
import Footer_Eng from './Footer_Eng';
import { Helmet } from 'react-helmet';
import iconImg from '../../images/icon.png';

const Layout = ({ children })=>{
    
    return (
        <>
            <Helmet>
                <title>David Luque | Portfolio</title>
                <meta name="title" property="og:title" content="David Luque | Personal porfolio"/>
                <meta name="description" property="og:description" content="David Luque personal porfolio"/>
                <meta name="image" property="og:image" content="./static/portfolio-img-17266d63bda45a660d67ab37ce4265fa.png"/>

                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="shortcut icon" type="image/png" href={iconImg}/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,700;1,400&display=swap" rel="stylesheet"/>
            </Helmet>

            <Nav_Eng />
            <main>{children}</main>
            <Footer_Eng/>
        </>
    )
};

export default Layout;