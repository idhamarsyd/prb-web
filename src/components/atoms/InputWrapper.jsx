import React from "react";

export const InputWrapper = ({ helperText, children }) => {
  return (
    <div className="flex flex-col">
      <div className="border-b-2 border-[#E5E5EA]">{children}</div>
      <span className="font-sans text-xs text-[#8A8A8E] pl-4 pt-1 tracking-wide">
        {helperText}
      </span>
    </div>
  );
};
