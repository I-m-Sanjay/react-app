import React from 'react';

interface CheckboxProps {
  id: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
  lab:string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  label,
  className,
  lab,
}) => {
  return (
    <div className={className}>
      <input
        type="checkbox"
        id={id}
        name={name}
        className="checkbox-input"
      />
      {label && (
        <label className={lab} htmlFor={id} >
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
