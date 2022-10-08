import React from "react";
import accountProfile from "../../assets/icons/account_circle.svg";

export const Card = ({ name, id, onPress }) => {
  return (
    <div
      className="flex flex-row gap-6 items-center cursor-pointer"
      onClick={onPress}
    >
      <div className="flex w-16 rounded-lg bg-gray-100 aspect-square justify-center items-center">
        <img src={accountProfile} alt="accountProfile" />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="font-sans text-lg antialiased font-bold">{name}</h1>
        <p className="font-sans text-xs text-[#999999] tracking-wide">{id}</p>
      </div>
    </div>
  );
};
