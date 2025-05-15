interface InputProps {
    placeholder: string,
    type?: string,
    className?: string,
    name: string,
    error?: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    label?: string,
}


const Input:React.FC<InputProps> = ({
    placeholder,
    type ="Text",
    className,
    name,
    error,
    value,
    onChange,
    label
}) => {
  return (
    <div className="flex flex-col">
        {label && <label className="font-semibold">{label}</label>}
        <input type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={`px-3 py-1 border-2 border-purple-300 rounded-lg outline-none focus:outline-none focus:ring-0 focus:border-purple-600 ${className}`} />
        {error && <div className="text-red-500">{error}</div>}
    </div>
  )
}

export default Input