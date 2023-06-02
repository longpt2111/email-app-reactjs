import React, { useMemo, useState } from "react";
import UserAvatar from "../../../UI-component/user-avatar";
import { IMessage } from "../../../../interfaces/data.interface";
import formatTime from "../../../../helpers/format-time.helper";
import { useLocation, useNavigate } from "react-router-dom";

interface IPropsEmailSummary {
  messageDetails: IMessage[];
  folder: string;
}

const EmailSummary: React.FC<IPropsEmailSummary> = ({
  messageDetails,
  folder,
}) => {
  const [isRead, setIsRead] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const folderMessages = useMemo(
    () =>
      messageDetails.filter((messageDetail) => messageDetail.folder === folder),
    [folder, messageDetails]
  );

  return (
    <>
      {folderMessages.map(
        (
          {
            id,
            from: { name, avatarUrl },
            timestamp,
            main: { title, content },
            unread,
          },
          index
        ) => (
          <div
            key={index}
            className={`flex justify-start items-start w-full px-4 py-4 gap-4 border-b border-gray-300 cursor-pointer false ${
              pathname.includes(id) && "bg-blue-500 text-white"
            } ${unread && "bg-gray-200"} ${isRead && "bg-white"}`}
            onClick={() => {
              navigate(`${id}`);
              setIsRead(true);
            }}
          >
            <div className="w-1/6">
              <UserAvatar avatarUrl={avatarUrl} size="full" />
            </div>
            <div className="w-5/6 flex flex-col items-start justify-between">
              <div
                className={`flex items-center justify-between w-full text-sm text-gray-500 font-medium ${
                  pathname.includes(id) && "text-white"
                }`}
              >
                <p>{name}</p>
                <p>{formatTime(timestamp, "vi-VN")}</p>
              </div>
              <div>
                <h6 className="text-md font-bold w-full line-clamp-1">
                  {title}
                </h6>
              </div>
              <div className="w-full">
                <p
                  className={`w-full text-sm line-clamp-3 text-gray-500 ${
                    pathname.includes(id) && "text-white"
                  }`}
                >
                  {content}
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default EmailSummary;
