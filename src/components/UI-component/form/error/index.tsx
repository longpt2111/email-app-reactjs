import React from "react";

const FormError: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
}) => {
  return <p className="text-red-500">{children}</p>;
};

export default FormError;
