import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface IPropsEmailPage {
  currentUserEmail: string;
}

const EmailPage: React.FC<IPropsEmailPage> = ({ currentUserEmail }) => {
  if (!currentUserEmail) return <Navigate to="/login" />;
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default EmailPage;
