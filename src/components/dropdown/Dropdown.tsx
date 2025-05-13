interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  dropdownClassName?: string;
  required?: boolean;
  labelText?: string;
  htmlFor: string;
  labelClassName?: string;
}

export default function Dropdown({
  name,
  value,
  onChange,
  options,
  dropdownClassName,
  required,
  labelText,
  labelClassName,
  htmlFor,
}: DropdownProps) {
  return (
    <label className={`${labelClassName} flex flex-col`} htmlFor={htmlFor}>
      {labelText}
      <select
      name={name}
      id={htmlFor}
      value={value}
      onChange={onChange}
      className={`${dropdownClassName} border-2 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 transition-colors`}
      required={required}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    </label>
  );
}
