import React from 'react'
import './Button.css'
const Button = ({
    type = 'submit',
    onClick,
    params,
    customClass,
    btnText,
    textClassName,
}) => {

    const handleClick = (clickFunction, params) => {
        if (typeof clickFunction === 'function') {
            clickFunction(params);
        }
    };

    return (
        <button
            type={type}
            onClick={() => handleClick(onClick, params)}
            className={`${customClass} costum-button`}
        >
            <span
                className={`${textClassName} btn-text`}
            >
                {btnText}
            </span>
        </button>
    )
}

export default Button
