import React from 'react';

const CustomButtonUrl = ({label, url, onClick, type = "button", variant = "primary"}) => {
    const buttonStyle = variant === "primary" ? "bg-brand-500 text-brand-0 hover:bg-brand-600 duration-300" : "bg-brand-0 text-brand-1000 hover:bg-brand-900 duration-300";

    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer"
            type={type}
            className={`btn ${buttonStyle} w-full h-fit flex justify-center p-2 cursor-pointer`}
            onClick={onClick}
        >
            {label}
        </a>
    )
}

export default CustomButtonUrl;