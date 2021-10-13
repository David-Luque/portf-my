import * as React from 'react';
import styled from '@emotion/styled';

const HeaderStyled = styled.header`
    width: 100%;
    height: 30rem;
    background-color: grey;

    .container {
        padding-top: 7rem;
        font-size: 1.5rem;

        .line {
            width: 25%;
            height: 2px;
            background-color: black;
            margin: -1rem;
        }

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`;

const Header = () => {
    return (
        <HeaderStyled>
            <div className="container">
                <h3>David Luque</h3>
                <div className="line"></div>
                <h4>Full stack web developer</h4>
                <img src="" alt="" />
            </div>
        </HeaderStyled>
        
    );
};

export default Header;