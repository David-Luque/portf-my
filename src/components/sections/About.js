import * as React from 'react';
import styled from '@emotion/styled';

const AboutStyled = styled.section`
    width: 100%;
    height: 20rem;
    background-color: #088F8F;
    color: whitesmoke;

    .content {
        box-sizing: border-box;
        width: 90%;
        height: 80%;
        background-color: rgba(0, 0, 0, 0.15);
        padding: 2rem;

        display: flex;
        justify-content: space-around;
        align-items: flex-start;
    }

    display: flex;
    justify-content: center;
    align-items: center;

`;

const About = () => {
    return (
        <AboutStyled>
            <div className="content">
                <h2>About me</h2>
                <p>Description about me...</p>
            </div>
            
        </AboutStyled>
    );
}
 
export default About;