import React from "react";
import FormLabel from "../label";

interface IPropsInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
}

const FormInput: React.FC<IPropsInput> = ({
  label,
  id = "",
  name = "",
  value = "",
  type = "",
  error = false,
  ...props
}) => {
  return (
    <div>
      <FormLabel label={label} id={id} name={name} />
      <input
        className={`w-full bg-white rounded-md border border-gray-900 py-2.5 px-3 shadow-md ${
          error && "border border-red-500"
        }`}
        id={id}
        name={name}
        type={type}
        value={value}
        {...props}
      />
    </div>
  );
};

export default FormInput;
