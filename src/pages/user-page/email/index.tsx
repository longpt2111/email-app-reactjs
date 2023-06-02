import React from "react";
import { Navigate, Outlet } from "react-router-dom";

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
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default EmailPage;
