import React from "react";
import logoUrlDark from "../../../assets/images/connect-logo-black.svg";
import logoUrlWhite from "../../../assets/images/connect-logo-white.svg";

interface IPropsLogo {
  color: "dark" | "white";
  className?: string;
}

const Logo: React.FC<IPropsLogo> = ({ color, className }) => {
  return (
    <img
      className={`max-w-full ${className}`}
      src={color === "dark" ? logoUrlDark : logoUrlWhite}
      alt="connect"
    />
  );
};

export default Logo;
