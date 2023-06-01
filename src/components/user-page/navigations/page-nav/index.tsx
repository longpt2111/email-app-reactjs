import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

const pageLinks = [
  {
    id: "home-link",
    label: <FontAwesomeIcon icon={faHome} />,
    to: "/main/home",
  },
  {
    id: "email-link",
    label: <FontAwesomeIcon icon={faEnvelope} />,
    to: "/main/email",
  },
  {
    id: "contact-link",
    label: <FontAwesomeIcon icon={faUser} />,
    to: "/main/contact",
  },
];

const PageNav: React.FC = () => {
  return (
    <>
      {pageLinks.map((pageLink) => (
        <NavLink
          key={pageLink.id}
          to={pageLink.to}
          className={({ isActive }) =>
            `items-center justify-center text-white flex w-full h-14 font-light text-md ${
              isActive ? "font-bold bg-blue-700" : ""
            }`
          }
        >
          {pageLink.label}
        </NavLink>
      ))}
    </>
  );
};

export default PageNav;
