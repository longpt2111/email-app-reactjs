import React, { SelectHTMLAttributes } from "react";
import FormLabel from "../label";

interface IPropsFormSelect extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  hasError?: boolean;
  options: {
    value: string;
    label: string;
  }[];
}

const FormSelect: React.FC<IPropsFormSelect> = ({
  label,
  id = "",
  name = "",
  hasError = false,
  options,
  ...props
}) => {
  return (
    <>
      <FormLabel id={id} name={name} label={label} />
      <select
        className={`w-full bg-white rounded-md border border-gray-900 py-2.5 px-3 shadow-md ${
          hasError && "border border-red-500"
        }`}
        id={id}
        name={name}
        {...props}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default FormSelect;
