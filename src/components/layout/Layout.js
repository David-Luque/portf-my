import * as React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const Layout = ({ children })=>{
    
    return (
        <>
            <Helmet>
                <title>David L. Portfolio</title>
                <meta name="description" content="David Luque personal portfolio"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="src/css/style.css"/>
                <link rel="shortcut icon" tyle="image/png" href="src/images/icon.png"/>
            </Helmet>

            <Nav />
            <main>{children}</main>
            <Footer/>
        </>
    )
};

export default Layout;