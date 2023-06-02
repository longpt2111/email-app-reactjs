import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

interface IPropsEmailPage {
  currentUserEmail: string;
}

const EmailPage: React.FC<IPropsEmailPage> = ({ currentUserEmail }) => {
  const { pathname } = useLocation();

  if (!currentUserEmail) return <Navigate to="/login" />;
  return (
    <>
      <div className="w-1/6"></div>
      <div className="w-5/6 h-screen flex flex-col justify-start items-center relative overflow-hidden">
        <div className="flex items-center h-full w-full">
          {pathname.split("/").length < 4 ? (
            <>
              <div className="w-1/4 h-full border-r border-gray-300 top-14 relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-3xl text-center">
                    Please choose <br /> a folder
                  </p>
                </div>
              </div>
              <div className="w-3/4 h-full top-14 relative">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-3xl">Please choose a folder first</p>
                </div>
              </div>
            </>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </>
  );
};

export default EmailPage;
