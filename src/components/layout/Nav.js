import * as React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const NavBar = styled.nav`
    box-sizing: border-box;
    width: 100%;
    height: auto;
    padding: 1rem;
    background-color: royalblue;
    text-align: end
`

const NavLinks = styled.ul`

    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    a {
        text-decoration: none;
        color: whitesmoke;
    }
`


const Nav = ()=>{
    return (
        <NavBar>
            <NavLinks>
                <Link to={'/about'}>
                    <li>About me</li>
                </Link>
                <Link to={'/technologies'}>
                    <li>Technologies</li>
                </Link>
                <Link to={'/projects'}>
                    <li>Projects</li>
                </Link>
                <Link to={'/contact'}>
                    <li>Contact</li>
                </Link>
            </NavLinks>
        </NavBar>
    );
};

export default Nav;