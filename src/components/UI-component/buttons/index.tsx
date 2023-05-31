import React from "react";

interface IPropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<IPropsButton> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md text-white false ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
