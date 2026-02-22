import React from 'react';

const CustomButton = ({label, onClick, type = "button", variant = "primary"}) => {
    const buttonStyle = variant === "primary" ? "bg-brand-500 text-brand-0 hover:bg-brand-600 duration-300" : "bg-brand-0 text-brand-1000 hover:bg-brand-900 duration-300";

    return (
        <button
            type={type}
            className={`btn ${buttonStyle} w-full py-2 cursor-pointer`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default CustomButton;