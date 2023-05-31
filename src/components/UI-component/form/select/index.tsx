import React, { SelectHTMLAttributes } from "react";
import FormLabel from "../label";

interface IPropsFormSelect extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: boolean;
  onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void;
  options: {
    value: string;
    label: string;
  }[];
}

const FormSelect: React.FC<IPropsFormSelect> = ({
  label,
  id = "",
  name = "",
  error = false,
  onChange,
  options,
  ...props
}) => {
  return (
    <>
      <FormLabel id={id} name={name} label={label} />
      <select
        className={`w-full bg-white rounded-md border border-gray-900 py-2.5 px-3 shadow-md ${
          error && "border border-red-500"
        }`}
        id={id}
        name={name}
        onChange={onChange}
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
