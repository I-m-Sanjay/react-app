import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void; 
  id?: string;
  type: "button" | "submit"; 
  className:string
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  id,
  type,
  className,
}) => {
  return (
    <button
      id={id}
      onClick={onClick} 
      type={type}
      className={className}
    >
      {text}
    </button>
  );
};

export default Button;
