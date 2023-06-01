import React from "react";
import { Navigate } from "react-router-dom";

interface IPropsEmailPage {
  currentUserEmail: string;
}

const EmailPage: React.FC<IPropsEmailPage> = ({ currentUserEmail }) => {
  if (!currentUserEmail) return <Navigate to="/login" />;
  return <div>EmailPage</div>;
};

export default EmailPage;
