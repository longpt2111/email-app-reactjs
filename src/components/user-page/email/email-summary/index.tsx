import React, { useState } from "react";
import UserAvatar from "../../../UI-component/user-avatar";
import formatTime from "../../../../helpers/format-time.helper";
import { useLocation, useNavigate } from "react-router-dom";

interface IPropsEmailSummary {
  id: string;
  name: string;
  avatarUrl: string;
  timestamp: string;
  title: string;
  content: string;
  unread: boolean;
}

const EmailSummary: React.FC<IPropsEmailSummary> = ({
  id,
  name,
  avatarUrl,
  timestamp,
  title,
  content,
  unread,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [readState, setReadState] = useState<boolean>(unread);

  const isActive = pathname.includes(id);

  const handleClick = () => {
    navigate(id);
    setReadState(false);
  };

  return (
    <div
      className={`flex justify-start items-start w-full px-4 py-4 gap-4 border-b border-gray-300 cursor-pointer false ${
        readState && "bg-gray-200"
      } ${isActive && "bg-blue-500 text-white"}`}
      onClick={handleClick}
    >
      <div className="w-1/6">
        <UserAvatar avatarUrl={avatarUrl} size="full" />
      </div>
      <div className="w-5/6 flex flex-col items-start justify-between">
        <div
          className={`flex items-center justify-between w-full text-sm text-gray-500 font-medium ${
            isActive && "bg-blue-500 text-white"
          }`}
        >
          <p>{name}</p>
          <p>{formatTime(timestamp, "vi-VN")}</p>
        </div>
        <div>
          <h6 className="text-md font-bold w-full line-clamp-1">{title}</h6>
        </div>
        <div className="w-full">
          <p
            className={`w-full text-sm line-clamp-3 text-gray-500 ${
              isActive && "bg-blue-500 text-white"
            }`}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailSummary;
