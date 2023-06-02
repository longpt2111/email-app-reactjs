import React from "react";
import EmailSummary from "../../../../components/user-page/email/email-summary";

const EmailFolder: React.FC = () => {
  return (
    <div
      className="overflow-scroll relative"
      style={{ height: "calc(100% - 3.5rem)" }}
    >
      <EmailSummary />
    </div>
  );
};

export default EmailFolder;
