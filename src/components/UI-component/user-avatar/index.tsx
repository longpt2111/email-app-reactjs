import React from "react";

interface IPropsUserAvatar {
  avatarUrl: string;
  size: number | "full";
}

const UserAvatar: React.FC<IPropsUserAvatar> = ({ avatarUrl, size }) => {
  return (
    <div
      className={`relative rounded-full ${
        size === "full" ? "w-full pt-full" : `w-${size} h-${size}`
      } `}
      style={{ background: `#eee url(${avatarUrl}) no-repeat center/cover` }}
    ></div>
  );
};

export default UserAvatar;
