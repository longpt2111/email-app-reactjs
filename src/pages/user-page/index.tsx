import React from "react";
import { Navigate } from "react-router-dom";

interface IPropsUserPage {
  currentUserEmail: string;
}

const UserPage: React.FC<IPropsUserPage> = ({ currentUserEmail }) => {
  if (!currentUserEmail) return <Navigate to="/login" />;
  return <div>UserPage</div>;
};

export default UserPage;
