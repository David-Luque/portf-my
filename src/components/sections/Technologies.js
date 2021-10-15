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
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 3px;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const Technologies = () => {
    return (
        <TechnologiesStyled id="technologies">
            <h2>Technologies</h2>
            <ul className="container">
                <h3>Basics</h3>
                <li>HTML / CSS / Javascript</li>

                <h3>Styling</h3>
                <li>SASS / SCSS & styled components</li>
                
                <h3>Client frameworks</h3>
                <li>React & Redux </li>
                <li>Next.js & Gatsby</li>
                
                <h3>Server frameworks and databases</h3>
                <li>Node.js & Express.js</li>
                <li>MongoDB & MySQL</li>

                <h3>API?</h3>
                <li>REST APIs & GraphQL</li>

                <h3>Testing</h3>
                <li>Jest, Cypress, React-testing-library</li>
                
                <h3>Version control</h3>
                <li>Git & GitHub</li>
                
                <h3>Content management system</h3>
                <li>Firebase, DatoCMS, Strapi</li>
            </ul>
        </TechnologiesStyled>
    );
}
 
export default Technologies;