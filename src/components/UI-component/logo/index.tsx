import React from "react";
import logoUrlDark from "../../../assets/images/connect-logo-black.svg";
import logoUrlWhite from "../../../assets/images/connect-logo-white.svg";

interface IPropsLogo {
  color: "dark" | "white";
}

const Logo: React.FC<IPropsLogo> = ({ color }) => {
  return (
    <img
      className="max-w-full"
      src={color === "dark" ? logoUrlDark : logoUrlWhite}
      alt="connect"
    />
  );
};

export default Logo;
