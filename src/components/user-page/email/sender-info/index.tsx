import React from "react";
import UserAvatar from "../../../UI-component/user-avatar";

interface IPropsSenderInfo {
  avatarUrl: string;
  name: string;
  email: string;
}

const SenderInfo: React.FC<IPropsSenderInfo> = ({ avatarUrl, email, name }) => {
  return (
    <div className="flex items-center sm:w-1/3 xl:w-1/5 gap-3">
      <div className="sm:w-1/3 xl:w-1/4">
        <UserAvatar avatarUrl={avatarUrl} size="full" />
      </div>
      <div className="">
        <h6 className=" text-md font-semibold">{name}</h6>
        <p className=" text-sm text-gray-500 font-light">{email}</p>
      </div>
    </div>
  );
};

export default SenderInfo;
