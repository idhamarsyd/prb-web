import React from "react";
import { ButtonTransparent } from "../atoms/ButtonTransparent";
import { useForm } from "react-hook-form";

export const InputField = ({
  placeholder,
  button = false,
  buttonLabel,
  helperText,
  type,
  onChange,
  name,
  value,
  id,
  buttonAction,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex flex-col">
      <div className="border-b-2 border-[#E5E5EA] pr-2">
        <input
          type={type}
          className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black"
          placeholder={placeholder}
          onChange={onChange}
          // {...register("username")}
          value={value}
          id={id}
        />
        {button ? (
          <ButtonTransparent label={buttonLabel} onClick={buttonAction} />
        ) : (
          <></>
        )}
      </div>
      <span className="font-sans text-xs text-[#8A8A8E] pl-4 pt-1 tracking-wide">
        {helperText}
      </span>
    </div>
  );
};
