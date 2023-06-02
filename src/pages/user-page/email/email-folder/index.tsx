import React, { useMemo } from "react";
import EmailSummary from "../../../../components/user-page/email/email-summary";
import { IMessage } from "../../../../interfaces/data.interface";
import { Outlet, useLocation } from "react-router-dom";

interface IPropsEmailFolder {
  messageDetails: IMessage[];
  folder: string;
}

const EmailFolder: React.FC<IPropsEmailFolder> = ({
  messageDetails,
  folder,
}) => {
  const { pathname } = useLocation();
  const folderMessages = useMemo(
    () =>
      messageDetails.filter((messageDetail) => messageDetail.folder === folder),
    [folder, messageDetails]
  );

  return (
    <>
      <div className="w-1/4 h-full border-r border-gray-300 top-14 relative overflow-hidden">
        <div
          className="overflow-scroll relative"
          style={{ height: "calc(100% - 3.5rem)" }}
        >
          {folderMessages.map(
            ({
              id,
              from: { name, avatarUrl },
              timestamp,
              main: { title, content },
              unread,
            }) => (
              <EmailSummary
                key={id}
                id={id}
                name={name}
                avatarUrl={avatarUrl}
                timestamp={timestamp}
                title={title}
                content={content}
                unread={unread}
              />
            )
          )}
        </div>
      </div>
      {pathname.split("/").length === 4 ? (
        <div className="w-3/4 h-full top-14 relative">
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-3xl">Please choose an email</p>
          </div>
        </div>
      ) : (
        <div className="w-3/4 h-full top-14 relative">
          <Outlet context={folderMessages} />
        </div>
      )}
    </>
  );
};

export default EmailFolder;
