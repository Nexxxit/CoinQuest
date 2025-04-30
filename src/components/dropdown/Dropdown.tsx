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
}

export default function Dropdown({name, value, onChange, options, dropdownClassName}: DropdownProps) {
    return (
        <select name={name} value={value} onChange={onChange} className={`${dropdownClassName} border rounded-lg p-1`} >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}