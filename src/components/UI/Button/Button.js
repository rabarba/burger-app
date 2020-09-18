import React from 'react';
import './Button.css';

const Button = (props) => {

    const className = "Button " + props.btnType;
    return (
        <button className={className} onClick={props.clicked}>{props.children} </button>
    );
}

export default Button;