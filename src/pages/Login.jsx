import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Heading } from "../components/atoms/Heading";
import { ButtonTransparent } from "../components/atoms/ButtonTransparent";
import { InputWrapper } from "../components/atoms/InputWrapper";
import { useSelector, useDispatch } from "react-redux";
import { checkAuth } from "../redux/loginReducer";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, token } = useSelector((state) => state.login);

  const handleLogin = async (data) => {
    await dispatch(checkAuth(data.username));
  };

  useEffect(() => {
    console.log(localStorage.getItem("token"));
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col gap-8 w-80 mx-auto h-screen justify-center">
      <div className="flex flex-col justify-center items-center">
        <Heading label="Selamat Datang." />
      </div>

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col gap-5"
      >
        <InputWrapper helperText="Masukkan username.">
          <input
            type="text"
            className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
            placeholder={errors.username ? errors.username.message : "Username"}
            {...register("username", { required: "Dibutuhkan username!" })}
          />
        </InputWrapper>
        <InputWrapper helperText="Masukkan password.">
          <input
            type="password"
            className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
            placeholder={errors.password ? errors.password.message : "Password"}
            {...register("password", { required: "Dibutuhkan password!" })}
          />
        </InputWrapper>

        <ButtonTransparent label={isAuth ? "SUKSES" : "MASUK"} type="submit" />
      </form>
    </div>
  );
};
