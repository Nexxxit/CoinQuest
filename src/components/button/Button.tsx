interface ButtonProps {
    label: string;
    className?: string;
    onClick?: () => void;
    type?: string;
}

export default function Button({label, className, onClick, type}: ButtonProps) {
    return (
        <button type={type = "button"} className={`${className} shadow p-1 rounded-lg bg-indigo-500 hover:bg-blue-500`} onClick={onClick}>
            {label}
        </button>
    );
}