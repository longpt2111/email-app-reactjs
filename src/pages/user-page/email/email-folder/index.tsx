import React from "react";
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
  return (
    <div
      className="overflow-scroll relative"
      style={{ height: "calc(100% - 3.5rem)" }}
    >
      <EmailSummary messageDetails={messageDetails} folder={folder} />
    </div>
  );
};

export default EmailFolder;
