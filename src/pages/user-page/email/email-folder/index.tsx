import React, { useMemo } from "react";
import EmailSummary from "../../../../components/user-page/email/email-summary";
import { IMessage } from "../../../../interfaces/data.interface";

interface IPropsEmailFolder {
  messageDetails: IMessage[];
  folder: string;
}

const EmailFolder: React.FC<IPropsEmailFolder> = ({
  messageDetails,
  folder,
}) => {
  const folderMessages = useMemo(
    () =>
      messageDetails.filter((messageDetail) => messageDetail.folder === folder),
    [folder, messageDetails]
  );

  return (
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
  );
};

export default EmailFolder;
