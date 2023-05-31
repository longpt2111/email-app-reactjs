import React from "react";
import Logo from "../../UI-component/logo";

const LoginHeader: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-12 ">
      <div className="lg:col-span-12 ">
        <div className="w-full text-center flex flex-col items-center gap-3">
          <div className="w-full px-24">
            <Logo color="dark" />
          </div>
          <div>
            <p className="text-xl text-gray-700 font-light">
              Login to check your email!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginHeader;
