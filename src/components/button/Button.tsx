interface ButtonProps {
    label: string;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export default function Button({label, className, onClick, type = "button"}: ButtonProps) {
    return (
        <button type={type} className={`${className} cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg
               hover:scale-[1.02] transition-transform font-semibold shadow-lg`} onClick={onClick}>
            {label}
        </button>
    );
}