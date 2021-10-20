import * as React from 'react';

const Button = ({ link, text, classToHTML })=>{
    return (
        <a
            className={classToHTML}
            href={link} target="_blank"
        >
            {text}
        </a>
    );
};

export default Button;