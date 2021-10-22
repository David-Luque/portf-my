import * as React from 'react';


const Technologies = () => {
    return (
        <section id="technologies" className="section-technologies">
            <h2 className="heading-secondary heading-secondary--light">
                Technologies
            </h2>
            <ul className="section-technologies__content">
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary">Basics</h3>
                    <p className="technologies__tech">HTML</p>
                    <p className="technologies__tech">CSS / SASS / SCSS</p>
                    <p className="technologies__tech">Javascript</p>
                </li>
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary">Frontend frameworks</h3>
                    <p className="technologies__tech">React</p>
                    <p className="technologies__tech">Next.js & Gatsby</p>
                </li>
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary">Server frameworks</h3>
                    <p className="technologies__tech">Node.js & Express.js</p>
                    
                </li>
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary">Databases</h3>
                    <p className="technologies__tech">MongoDB</p>
                    <p className="technologies__tech">MySQL</p>
                </li>
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary">Testing</h3>
                    <p className="technologies__tech">Jest, Cypress, React-testing-library</p>
                </li>
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary">Version control</h3>
                    <p className="technologies__tech">Git & GitHub</p>
                </li>
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary">Content management systems</h3>
                    <p className="technologies__tech">Firebase, DatoCMS, Strapi</p>
                </li>
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary">Other tools</h3>
                    <p className="technologies__tech">Redux</p>
                    <p className="technologies__tech">REST APIs & GraphQL</p>
                    <p className="technologies__tech">Styled components</p>
                </li>
            </ul>
        </section>
    );
}
 
export default Technologies;