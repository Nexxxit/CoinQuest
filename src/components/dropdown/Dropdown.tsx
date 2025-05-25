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
    <label
      className={`${labelClassName} flex flex-col text-white`}
      htmlFor={htmlFor}
    >
      {labelText}
      <select
        name={name}
        id={htmlFor}
        value={value}
        onChange={onChange}
        className={`${dropdownClassName} w-full bg-white/5 rounded-lg py-3 px-4 text-white placeholder-white/50 
                 focus:ring-2 focus:ring-purple-500 border border-white/20 transition-all`}
        required={required}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-gray-800 text-white hover:bg-purple-500"
          >
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
