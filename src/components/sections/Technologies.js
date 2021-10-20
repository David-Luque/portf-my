import * as React from 'react';


const Technologies = () => {
    return (
        <section id="technologies" className="section-technologies">
            <h2 className="heading-secondary">Technologies</h2>
            <ul className="section-technologies__content">
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary">Basics</h3>
                    <p>HTML</p>
                    <p>CSS / SASS / SCSS</p>
                    <p>Javascript</p>
                </li>
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary">Frontend frameworks</h3>
                    <p>React</p>
                    <p>Next.js & Gatsby</p>
                </li>
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary">Server frameworks</h3>
                    <p>Node.js & Express.js</p>
                    
                </li>
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary">Databases</h3>
                    <p>MongoDB</p>
                    <p>MySQL</p>
                </li>
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary">Testing</h3>
                    <p>Jest, Cypress, React-testing-library</p>
                </li>
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary">Version control</h3>
                    <p>Git & GitHub</p>
                </li>
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary">Content management systems</h3>
                    <p>Firebase, DatoCMS, Strapi</p>
                </li>
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary">Other tools</h3>
                    <p>Redux</p>
                    <p>REST APIs & GraphQL</p>
                    <p>Styled components</p>
                </li>
            </ul>
        </section>
    );
}
 
export default Technologies;