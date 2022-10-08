import React from "react";

export const ButtonFill = ({ label, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      class="rounded-full bg-[#B3D7FF] font-sans text-sm antialiased font-medium text-[#007AFF] px-4 py-2 h-10"
    >
      {label}
    </button>
  );
};
