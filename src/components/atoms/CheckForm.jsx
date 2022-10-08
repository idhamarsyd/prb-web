import React from "react";

export const CheckForm = ({ id, label, onClick, defaultChecked }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <input
        type="checkbox"
        id={id}
        defaultChecked={defaultChecked}
        onChange={onClick}
      />
      <label htmlFor={id}>
        <span class="font-sans text-sm antialiased font-medium text-[#007AFF] cursor-pointer">
          {label}
        </span>
      </label>
    </div>
  );
};
