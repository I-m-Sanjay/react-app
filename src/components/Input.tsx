import React from "react";

interface TextInputProps {
  id?: string;
  label?: string;
  type: string;
  name: string;
  placeholder?: string;
  value?: string | number;
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  icon?: React.ReactNode;
  labelClassName?:string
}

export const InputField: React.FC<TextInputProps> = ({
  id,
  label,
  type,
  value,
  name,
  // onChange,
  placeholder,
  className,
  icon,
  labelClassName,
}) => {

  return (

    <div className="group-input">
      <div className="flex">
        <div className="flex-grow">
          {label && <label htmlFor={name} className={labelClassName}>{label}</label>}
        </div>
      </div>
      <div className="relative flex items-center">
        {icon && <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">{icon}</div>} 
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          // onChange={onChange}
          placeholder={placeholder}
          className={className} 
        />
      </div>
    </div>
  );
};

export default InputField;
