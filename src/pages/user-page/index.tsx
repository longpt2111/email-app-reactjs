import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import NavBar from "../../components/user-page/navigations/navbar";
import Logo from "../../components/UI-component/logo";
import FolderNav from "../../components/user-page/navigations/folder-nav";
import PageNav from "../../components/user-page/navigations/page-nav";

interface IPropsUserPage {
  currentUserEmail: string;
  setCurrentUserEmail: React.Dispatch<React.SetStateAction<string>>;
}

const UserPage: React.FC<IPropsUserPage> = ({
  currentUserEmail,
  setCurrentUserEmail,
}) => {
  const { pathname } = useLocation();

  if (!currentUserEmail) return <Navigate to="/login" />;
  return (
    <div className="w-full min-h-screen flex items-center relative">
      <div className="fixed top-0 right-0 w-5/6 h-14 bg-white border-b z-20">
        <NavBar
          currentUserEmail={currentUserEmail}
          setCurrentUserEmail={setCurrentUserEmail}
        />
      </div>
      <div className="h-screen w-1/6 flex flex-col items-center fixed z-50 top-0 left-0 ">
        <div className="h-14 flex-shrink-0 bg-darkblue-900 w-full text-white flex items-center justify-start">
          <Logo color="white" className="w-3/4 h-4/6" />
        </div>
        <div className="h-full flex items-center w-full">
          <div className="w-1/5 h-full bg-darkblue-900 flex flex-col items-center justify-start">
            <PageNav />
          </div>
          <div className="w-4/5 h-full bg-darkblue-800 flex flex-col items-start justify-start">
            {pathname.indexOf("/main/email") !== -1 ? (
              <FolderNav currentUserEmail={currentUserEmail} />
            ) : (
              <p className="text-white text-center w-full py-16">
                Construction
              </p>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default UserPage;
