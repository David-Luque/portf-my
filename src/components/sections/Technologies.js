import * as React from 'react';
import styled from '@emotion/styled';

const TechnologiesStyled = styled.section`
    width: 100%;
    height: auto;
    background-color: #EADDCA;
    box-sizing: border-box; 
    padding: 2rem;

    .container {
        width: 100%;
        list-style: none;

        li {
            padding: 2rem;
            background-color: rgba(0,0,0,.15);
        }

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 3px;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const Technologies = () => {
    return (
        <TechnologiesStyled>
            <h2>Technologies</h2>
            <ul className="container">
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
                <li>Five</li>
                <li>Six</li>
            </ul>
        </TechnologiesStyled>
    );
}
 
export default Technologies;