const Label = ({text, variant = "primary"}) => {
    const buttonStyle = variant === "secondary" ? "bg-brand-0 text-brand-1000" : "bg-transparant text-white border border-white";

    return (
        <div
            className={`btn ${buttonStyle} w-fit py-1.5 px-1.5`}
        >
            <p className="text-lg">{text}</p>
        </div>
    )
}

export default Label;