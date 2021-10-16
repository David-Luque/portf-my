import * as React from 'react';

const Button = ({ link, text })=>{
    return (
        <a
            href={link} target="_blank"
        >
            {text}
        </a>
    );
};

export default Button;