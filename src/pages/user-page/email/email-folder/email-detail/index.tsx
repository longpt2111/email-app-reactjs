import React from "react";
import Button from "../../../../../components/UI-component/buttons";
import SenderInfo from "../../../../../components/user-page/email/sender-info";
import { useOutletContext, useParams } from "react-router-dom";
import { IMessage } from "../../../../../interfaces/data.interface";
import formatTime from "../../../../../helpers/format-time.helper";

const EmailDetail: React.FC = () => {
  const { id } = useParams();
  const folderMessages: IMessage[] = useOutletContext();
  const {
    from: { email, name, avatarUrl },
    timestamp,
    main: { title, content },
  } = folderMessages.find(
    (folderMessage: IMessage) => folderMessage.id === id
  ) as IMessage;
  return (
    <div className="grid grid-cols-12 p-6">
      <div className="col-span-12">
        <div className="flex items-center justify-between">
          <SenderInfo avatarUrl={avatarUrl} name={name} email={email} />
          <div className="flex items-center gap-4">
            <p className={`text-sm text-gray-500 font-light`}>
              {formatTime(timestamp, "vi-VN", true)}
            </p>
            <div className="flex items-center justify-end gap-2">
              <Button className="bg-gray-500 text-white hover:bg-gray-400">
                Reply
              </Button>
              <Button className="border border-green-500 text-green-500 hover:bg-green-200 ">
                Forward
              </Button>
              <Button className="border border-red-500 text-red-500 hover:bg-red-200 ">
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12">
        <div className="py-12">
          <h2 className="text-4xl font-semibold mb-8">{title}</h2>
          <div className="border-b pb-8">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailDetail;
