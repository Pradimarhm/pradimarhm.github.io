import React from 'react';

const CustomStrokeButton2 = ({label, onClick, type = "button", variant = true}) => {
    const buttonStyle = variant === true ? "bg-brand-0 border border-brand-0 shadow-md/50 shadow-brand-950 text-brand-1000 duration-300" : "bg-brand-1000 border border-brand-0 text-brand-0 hover:bg-brand-50 hover:text-brand-1000 duration-300";

    return (
        <button
            type={type}
            className={`btn  ${buttonStyle} w-fit py-2 px-4 text-sm md:text-md cursor-pointer`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default CustomStrokeButton2;