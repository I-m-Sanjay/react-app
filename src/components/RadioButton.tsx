import React from 'react';

interface RadioProps {
  id: string;
  name: string;
  value: string;
  label: string;
  className: string;
}

const Radio: React.FC<RadioProps> = ({
  id,
  name,
  value,
  label,
  className,
}) => {
  return (
    <div className={className}>
      <input 
        id={id}
        name={name}
        value={value}
        type="radio"  
      />
      <label htmlFor={id}>{label}</label>  
    </div>
  );
};

export default Radio;
