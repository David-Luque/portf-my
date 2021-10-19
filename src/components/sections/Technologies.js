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
        <TechnologiesStyled id="technologies" className="section-technologies">
            <h2>Technologies</h2>
            <ul className="container">
                <li>
                    <h3>Basics</h3>
                    <p>HTML</p>
                    <p>CSS / SASS / SCSS</p>
                    <p>Javascript</p>
                </li>
                <li>
                    <h3>Frontend frameworks</h3>
                    <p>React</p>
                    <p>Next.js & Gatsby</p>
                </li>
                <li>
                    <h3>Server frameworks</h3>
                    <p>Node.js & Express.js</p>
                    
                </li>
                <li>
                    <h3>Databases</h3>
                    <p>MongoDB</p>
                    <p>MySQL</p>
                </li>
                <li>
                    <h3>Testing</h3>
                    <p>Jest, Cypress, React-testing-library</p>
                </li>
                <li>
                    <h3>Version control</h3>
                    <p>Git & GitHub</p>
                </li>
                <li>
                    <h3>Content management systems</h3>
                    <p>Firebase, DatoCMS, Strapi</p>
                </li>
                <li>
                    <h3>Other tools</h3>
                    <p>Redux</p>
                    <p>REST APIs & GraphQL</p>
                    <p>Styled components</p>
                </li>
            </ul>
        </TechnologiesStyled>
    );
}
 
export default Technologies;