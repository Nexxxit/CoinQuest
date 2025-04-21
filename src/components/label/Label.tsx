interface LabelProps {
    htmlFor: string;
    labelText?: string;
    type: string;
    placeholderText?: string;
    labelClassName?: string;
    inputClassName?: string;
}

export default function Label({htmlFor, labelText, type, placeholderText, labelClassName, inputClassName}: LabelProps) {
    return (
        <label className={`${labelClassName} flex flex-col`} htmlFor={htmlFor}>
            {labelText}
            <input className={`${inputClassName} border rounded-lg placeholder:p-1`} id={htmlFor} type={type} placeholder={placeholderText} />
        </label>
    );
}