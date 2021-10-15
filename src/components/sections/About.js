import * as React from 'react';
import styled from '@emotion/styled';

const AboutStyled = styled.section`
    width: 100%;
    height: auto;
    background-color: #088F8F;
    color: whitesmoke;

    .content {
        box-sizing: border-box;
        width: 90%;
        height: 80%;
        background-color: rgba(0, 0, 0, 0.15);
        padding: 2rem;

        .description-text {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
        }

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
        <AboutStyled id="about">
            <div className="content">
                <h2>About me</h2>
                <div className="description-text">
                    <p>
                        Tras pasar por la educación universitaria y no encontrar satisfacción en la metodología y conocimientos que se impartían, sentí la necesidad de aprender por mi cuenta. Desde entonces mi formación ha sido principalmente autodidacta.
                    </p>
                    <p>
                        Mi misión como desarrollador web es generar un gran impacto positivo y aportar el máximo valor con mi trabajo; crecer, profundizar y desarrollar mis conocimientos; trabajar y conocer múltiples herramientas y tecnologías; contribuir a un buen clima en el equipo de trabajo gracias a mi naturaleza conciliadora, y aportar mi perspectiva personal y única para afrontar desafíos.
                    </p>
                    <p>
                        Mis principios son: honestidad, colaboración, ética, humildad y vocación de servicio.
                        Soy una persona curiosa por naturaleza, me gusta no sólo entender la parte práctica sino también el porqué de las cosas.
                    </p>
                </div>
            </div>
            
        </AboutStyled>
    );
}
 
export default About;