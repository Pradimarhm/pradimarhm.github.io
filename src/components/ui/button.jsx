import React from 'react';

const Button = ({label, onClick, type = "button", variant = "primary"}) => {
    const buttonStyle = variant === "primary" ? "btn-brand-500" : "btn-brand-0";

    return (
        <button
            type={type}
            className={`btn ${buttonStyle}`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button;