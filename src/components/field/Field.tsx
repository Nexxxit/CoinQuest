interface FieldProps {
  htmlFor: string;
  labelText?: string;
  type: string;
  placeholderText?: string;
  labelClassName?: string;
  inputClassName?: string;
  required?: boolean;
  value?: string;
  title?: string;
  pattern?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Field({
  htmlFor,
  labelText,
  type,
  placeholderText,
  labelClassName,
  inputClassName,
  required,
  onChange,
  value,
  title,
  pattern,
}: FieldProps) {
  return (
    <label className={`${labelClassName} flex flex-col text-white`} htmlFor={htmlFor}>
      {labelText}
      <input
        className={`${inputClassName} w-full bg-white/5 rounded-lg py-3 px-4 text-white placeholder-white/50 
                 focus:ring-2 focus:ring-purple-500 border border-white/20 transition-all`}
        id={htmlFor}
        type={type}
        placeholder={placeholderText}
        onChange={onChange}
        required={required}
        value={value}
        title={title}
        pattern={pattern}
      />
    </label>
  );
}
