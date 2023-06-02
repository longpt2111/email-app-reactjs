import React from "react";
import underConstruction from "../../../assets/images/under-construction.png";

const UnderConstructionPage: React.FC = () => {
  return (
    <>
      <div className="w-1/6"></div>
      <div className="w-full h-full flex items-center justify-center">
        <img src={underConstruction} alt="Under construction" />
      </div>
    </>
  );
};

export default UnderConstructionPage;
