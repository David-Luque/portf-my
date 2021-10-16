import * as React from 'react';
import styled from '@emotion/styled';
import bgImage from '../../images/bg-hero.jpg';

const HeaderStyled = styled.header`
    width: 100%;
    height: 30rem;
    color: whitesmoke;
    background:
        linear-gradient(
          rgba(0, 0, 0, 0.6), 
          rgba(0, 0, 0, 0.6)
        ),
        url(${bgImage});
    background-size: cover;

    .container {
        padding-top: 7rem;
        font-size: 1.5rem;

        .line {
            width: 25%;
            height: 2px;
            background-color: whitesmoke;
            margin: -1rem;
        }

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`;

const Header = () => {
    console.log(bgImage)
    return (
        <HeaderStyled>
            <div className="container">
                <h3>David Luque</h3>
                <div className="line"></div>
                <h4>Full stack web developer</h4>
            </div>
        </HeaderStyled>
        
    );
};

export default Header;