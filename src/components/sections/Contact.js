import * as React from 'react';
import styled from '@emotion/styled';

const ContactStyled = styled.section`
    width: 100%;
    height: auto;
    background-color: #CF9FFF;
    padding: 2rem;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center
`;

const InfoContainer = styled.div`
    width: 90%;
    background-color: rgba(0,0,0, .2);
    padding: 1rem;

    display: flex;
    justify-content: space-around;
    align-items: center;

    .contact-form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: stretch;

        input, textarea {
            margin-bottom: .5rem;
        }
    }
`;

const Contact = () => {
    return (
        <ContactStyled>
            <h2>Contact</h2>
            <InfoContainer>
                <div className="contact-info">
                    <p>gitHub</p>
                    <p>email</p>
                    <p>linked-In</p>
                </div>
                <form className="contact-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        name="Subject"
                        placeholder="Subject"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                    ></textarea>
                    <button type="button"> Send </button>
                </form>
            </InfoContainer>
        </ContactStyled>
    );
}
 
export default Contact;