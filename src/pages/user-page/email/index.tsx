import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import EmailDetail from "./email-folder/email-detail";

interface IPropsEmailPage {
  currentUserEmail: string;
}

const EmailPage: React.FC<IPropsEmailPage> = ({ currentUserEmail }) => {
  if (!currentUserEmail) return <Navigate to="/login" />;
  return (
    <>
      <div className="w-1/6"></div>
      <div className="w-5/6 h-screen flex flex-col justify-start items-center relative overflow-hidden">
        <div className="flex items-center h-full w-full">
          <div className="w-1/4 h-full border-r border-gray-300 top-14 relative overflow-hidden">
            <Outlet />
          </div>
          <div className="w-3/4 h-full top-14 relative">
            <EmailDetail />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailPage;
