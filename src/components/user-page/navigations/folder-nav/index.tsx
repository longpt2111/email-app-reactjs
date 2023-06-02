import React from "react";
import { NavLink } from "react-router-dom";
import MessageService from "../../../../services/message.service";
import capitalize from "../../../../helpers/capitalize.helper";

interface IPropsFolderNav {
  currentUserEmail: string;
}

const FolderNav: React.FC<IPropsFolderNav> = ({ currentUserEmail }) => {
  const folders = new MessageService(currentUserEmail).getFolders;
  return (
    <>
      {folders.map((folder, index) => (
        <NavLink
          key={index}
          to={`/main/email/${folder}`}
          className={({ isActive }) =>
            `items-center justify-start pl-12 text-white flex w-full h-14 text-md ${
              isActive ? "font-bold bg-blue-700" : "font-light"
            }`
          }
        >
          {capitalize(folder)}
        </NavLink>
      ))}
    </>
  );
};

export default FolderNav;
