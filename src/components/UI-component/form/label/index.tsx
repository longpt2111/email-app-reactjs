import React from "react";

interface IPropsFormLabel extends React.LabelHTMLAttributes<HTMLLabelElement> {
  id?: string;
  name?: string;
  label?: string;
}

const FormLabel: React.FC<IPropsFormLabel> = ({ id, name, label }) => {
  return (
    <label
      className="block text-xl mb-2"
      htmlFor={id ? id : name ? name : label}
    >
      {label}
    </label>
  );
};

export default FormLabel;
