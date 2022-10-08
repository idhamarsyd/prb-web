import React from "react";

export const ButtonTransparent = ({ label, onClick, type }) => {
  return (
    <input
      type={type ? type : "button"}
      className="font-sans text-sm antialiased font-medium text-[#007AFF] px-4 py-3 cursor-pointer"
      value={label}
      onClick={onClick}
    />
  );
};
