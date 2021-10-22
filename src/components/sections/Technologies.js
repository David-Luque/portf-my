import * as React from 'react';


const Technologies = () => {
    return (
        <section id="technologies" className="section-technologies">
            <h2 className="heading-secondary heading-secondary--light">
                Technologies
            </h2>
            <ul className="section-technologies__content">
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary heading-tertiary--light">
                        Basics
                    </h3>
                    <p className="section-technologies__tech">HTML</p>
                    <p className="section-technologies__tech">CSS / SASS / SCSS</p>
                    <p className="section-technologies__tech">Javascript</p>
                </li>
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary heading-tertiary--light">
                        Frontend frameworks
                    </h3>
                    <p className="section-technologies__tech">React</p>
                    <p className="section-technologies__tech">Next.js & Gatsby</p>
                </li>
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary heading-tertiary--light">
                        Server frameworks
                    </h3>
                    <p className="section-technologies__tech">Node.js & Express.js</p>
                    
                </li>
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary heading-tertiary--light">
                        Databases
                    </h3>
                    <p className="section-technologies__tech">MongoDB</p>
                    <p className="section-technologies__tech">MySQL</p>
                </li>
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary heading-tertiary--light">
                        Testing
                    </h3>
                    <p className="section-technologies__tech">Jest, Cypress, React-testing-library</p>
                </li>
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary heading-tertiary--light">
                        Version control
                    </h3>
                    <p className="section-technologies__tech">Git & GitHub</p>
                </li>
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary heading-tertiary--light">
                        Content management systems
                    </h3>
                    <p className="section-technologies__tech">Firebase, DatoCMS, Strapi</p>
                </li>
                <li className="section-technologies__block">
                    <h3 className="heading-tertiary heading-tertiary--light">
                        Other tools
                    </h3>
                    <p className="section-technologies__tech">Redux</p>
                    <p className="section-technologies__tech">REST APIs & GraphQL</p>
                    <p className="section-technologies__tech">Styled components</p>
                </li>
            </ul>
        </section>
    );
}
 
export default Technologies;