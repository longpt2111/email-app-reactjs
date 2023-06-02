import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Button from "../../../UI-component/buttons";
import UserAvatar from "../../../UI-component/user-avatar";
import { userService } from "../../../../services/user.service";

interface IPropsNavBar {
  currentUserEmail: string;
  setCurrentUserEmail: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar: React.FC<IPropsNavBar> = ({
  currentUserEmail,
  setCurrentUserEmail,
}) => {
  const { pathname } = useLocation();
  const currentUserData = useMemo(
    () => userService.getUserData(currentUserEmail),
    [currentUserEmail]
  );
  if (!currentUserData) return null;

  return (
    <div className="w-full h-full flex items-center justify-between pl-4 pr-6 gap-3">
      <div>
        Pathname: <span className="font-semibold">{pathname}</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col justify-end items-end">
          <h6 className="font-bold text-sm">{currentUserData.name}</h6>
          <p className="text-sm text-gray-500 mb-0">{currentUserEmail}</p>
        </div>
        <div className="w-10 h-10">
          <UserAvatar avatarUrl={currentUserData.avatarUrl} size={10} />
        </div>
        <Button
          className="bg-red-500 hover:bg-red-400"
          onClick={() => setCurrentUserEmail("")}
        >
          <FontAwesomeIcon icon={faPowerOff} />
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
