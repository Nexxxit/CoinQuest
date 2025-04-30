interface LabelProps {
  htmlFor: string;
  labelText?: string;
  type: string;
  placeholderText?: string;
  labelClassName?: string;
  inputClassName?: string;
  required?: boolean;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Label({
  htmlFor,
  labelText,
  type,
  placeholderText,
  labelClassName,
  inputClassName,
  required,
  onChange,
  value,
}: LabelProps) {
  return (
    <label className={`${labelClassName} flex flex-col`} htmlFor={htmlFor}>
      {labelText}
      <input
        className={`${inputClassName} border-2 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 transition-colors`}
        id={htmlFor}
        type={type}
        placeholder={placeholderText}
        onChange={onChange}
        required={required}
        value={value}
      />
    </label>
  );
}
