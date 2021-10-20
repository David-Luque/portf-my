import * as React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import iconImg from '../../images/icon.png';

const Layout = ({ children })=>{
    
    return (
        <>
            <Helmet>
                <title>David L. Portfolio</title>
                <meta name="description" content="David Luque personal portfolio"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="shortcut icon" type="image/png" href={iconImg}/>
            </Helmet>

            <Nav />
            <main>{children}</main>
            <Footer/>
        </>
    )
};

export default Layout;