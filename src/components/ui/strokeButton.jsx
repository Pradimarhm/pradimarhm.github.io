import React from 'react';

const CustomStrokeButton = ({label, onClick, type = "button", variant = true}) => {
    const buttonStyle = variant === true ? "bg-brand-1000 border border-brand-1000 shadow-md/50 shadow-brand-950 text-brand-0 hover:bg-brand-950 duration-300" : "bg-brand-0 border border-brand-1000 text-brand-1000 hover:bg-brand-50 duration-300";

    return (
        <button
            type={type}
            className={`btn  ${buttonStyle} w-fit py-2 px-4 cursor-pointer`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default CustomStrokeButton;