import React from "react";
import LoginHeader from "../../components/login/login-header";
import LoginForm from "../../components/login/login-form";

interface IPropsLoginPage {
  currentUserEmail: string;
  setCurrentUserEmail(email: string): void;
}

const LoginPage: React.FC<IPropsLoginPage> = ({
  currentUserEmail,
  setCurrentUserEmail,
}) => {
  return (
    <div className="w-full bg-darkblue-900 min-h-screen">
      <div className="container mx-auto relative min-h-screen">
        <div className="rounded-lg mx-auto overflow-hidden absolute bg-white py-16 text-black px-8 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-auto w-[30rem]">
          <LoginHeader />
          <LoginForm
            currentUserEmail={currentUserEmail}
            setCurrentUserEmail={setCurrentUserEmail}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
