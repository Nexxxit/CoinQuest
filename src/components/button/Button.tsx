interface ButtonProps {
    label: string;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export default function Button({label, className, onClick, type = "button"}: ButtonProps) {
    return (
        <button type={type} className={`${className} cursor-pointer shadow p-1 rounded-lg bg-indigo-500 hover:bg-blue-500`} onClick={onClick}>
            {label}
        </button>
    );
}