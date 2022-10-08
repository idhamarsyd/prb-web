import React, { useState } from "react";
import { Heading } from "../components/atoms/Heading";
import { ButtonFill } from "../components/atoms/ButtonFill";
import { InputField } from "../components/molecules/InputField";
import arrowBack from "../assets/icons/arrow_back.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InputWrapper } from "../components/atoms/InputWrapper";
import { useSelector, useDispatch } from "react-redux";
import { addPatient } from "../redux/patientReducer";

export const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitAction = (data) => {
    console.log(data);
    dispatch(addPatient(data));
    navigate("/");
  };

  return (
    <div>
      <div className="w-1/2 border-2 mx-auto h-auto border-x-[#FAFAFA] flex flex-col gap-10 p-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-5">
            <a onClick={() => navigate("/")} className="flex">
              <img src={arrowBack} alt="arrowBack" className="cursor-pointer" />
            </a>
            <Heading label="Pendaftaran PRB" />
          </div>
          <form onSubmit={handleSubmit(submitAction)}>
            <InputWrapper helperText="Nama lengkap pasien.">
              <input
                type="text"
                className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                placeholder={errors.name ? errors.name.message : "Nama"}
                {...register("name", { required: "Dibutuhkan nama pasien!" })}
              />
            </InputWrapper>
            <InputWrapper helperText="Nomor BPJS pasien.">
              <input
                type="number"
                className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                placeholder={errors.bpjs ? errors.bpjs.message : "No. BPJS"}
                {...register("bpjs", {
                  required: "Dibutuhkan nomor BPJS pasien!",
                })}
              />
            </InputWrapper>
            <InputWrapper helperText="Nomor Medical Record pasien.">
              <input
                type="number"
                className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                placeholder={
                  errors.medicalrec
                    ? errors.medicalrec.message
                    : "No. Medical Record"
                }
                {...register("medicalrec", {
                  required: "Dibutuhkan nomor Medical Record pasien!",
                })}
              />
            </InputWrapper>
            <InputWrapper helperText="Tanggal lahir pasien.">
              <input
                type="date"
                className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                placeholder={
                  errors.birth ? errors.birth.message : "Tanggal Lahir"
                }
                {...register("birth", {
                  required: "Masukkan tanggal lahir pasien!",
                })}
              />
            </InputWrapper>
            <InputWrapper helperText="Alamat lengkap pasien.">
              <input
                type="text"
                className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                placeholder={errors.address ? errors.address.message : "Alamat"}
                {...register("address", {
                  required: "Masukkan alamat pasien!",
                })}
              />
            </InputWrapper>
            <InputWrapper helperText="Nomor Telepon pasien.">
              <input
                type="text"
                className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                placeholder={errors.telp ? errors.telp.message : "No. Telp"}
                {...register("telp", {
                  required: "Masukkan nomor telepon pasien!",
                })}
              />
            </InputWrapper>
            <InputWrapper helperText="Rumah sakit tempat pasien berobat.">
              <input
                type="text"
                className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                placeholder={
                  errors.hospital ? errors.hospital.message : "Rumah Sakit"
                }
                {...register("hospital", {
                  required: "Masukkan rumah sakit tempat pasien berobat!",
                })}
              />
            </InputWrapper>
            <InputWrapper helperText="Diagnosa pasien.">
              <input
                type="text"
                className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                placeholder={
                  errors.diagnosa ? errors.diagnosa.message : "Diagnosa"
                }
                {...register("diagnosa", {
                  required: "Masukkan hasil diagnosa pasien!",
                })}
              />
            </InputWrapper>
            <div className="flex flex-col mt-6 mb-6">
              <h1 className="font-sans text-base antialiased font-bold">
                Obat 1
              </h1>
              <InputWrapper helperText="Masukkan nama obat.">
                <input
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={
                    errors.obat1_name ? errors.obat1_name.message : "Nama Obat"
                  }
                  {...register("obat1_name")}
                />
              </InputWrapper>
              <InputWrapper helperText="Jumalh obat, misal 300gr.">
                <input
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={
                    errors.obat1_qty ? errors.obat1_qty.message : "Jumlah"
                  }
                  {...register("obat1_qty")}
                />
              </InputWrapper>
              <InputWrapper helperText="Jadwal konsumsi obat, misal: 2x sehari.">
                <input
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={
                    errors.obat1_schedule
                      ? errors.obat1_schedule.message
                      : "Jadwal"
                  }
                  {...register("obat1_schedule")}
                />
              </InputWrapper>
            </div>
            <div className="flex flex-col mt-6 mb-6">
              <h1 className="font-sans text-base antialiased font-bold">
                Obat 2
              </h1>
              <InputWrapper helperText="Masukkan nama obat.">
                <input
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={
                    errors.obat2_name ? errors.obat2_name.message : "Nama Obat"
                  }
                  {...register("obat2_name")}
                />
              </InputWrapper>
              <InputWrapper helperText="Jumalh obat, misal 300gr.">
                <input
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={
                    errors.obat2_qty ? errors.obat2_qty.message : "Jumlah"
                  }
                  {...register("obat2_qty")}
                />
              </InputWrapper>
              <InputWrapper helperText="Jadwal konsumsi obat, misal: 2x sehari.">
                <input
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={
                    errors.obat2_schedule
                      ? errors.obat2_schedule.message
                      : "Jadwal"
                  }
                  {...register("obat2_schedulue")}
                />
              </InputWrapper>
            </div>
            <div className="flex flex-col mt-6 mb-6">
              <h1 className="font-sans text-base antialiased font-bold">
                Obat 3
              </h1>
              <InputWrapper helperText="Masukkan nama obat.">
                <input
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={
                    errors.obat3_name ? errors.obat3_name.message : "Nama Obat"
                  }
                  {...register("obat3_name")}
                />
              </InputWrapper>
              <InputWrapper helperText="Jumalh obat, misal 300gr.">
                <input
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={
                    errors.obat3_qty ? errors.obat3_qty.message : "Jumlah"
                  }
                  {...register("obat3_qty")}
                />
              </InputWrapper>
              <InputWrapper helperText="Jadwal konsumsi obat, misal: 2x sehari.">
                <input
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={
                    errors.obat3_schedule
                      ? errors.obat3_schedule.message
                      : "Jadwal"
                  }
                  {...register("obat3_schedulue")}
                />
              </InputWrapper>
            </div>
            <h1 className="font-sans text-sm antialiased font-bold text-gray-500 mb-10">
              Obat tersebut di atas diberikan untuk tiap bulan selama 3 bulan
            </h1>
            <h1 className="font-sans text-base antialiased font-bold">
              Rujukan Selanjutnya
            </h1>
            <InputWrapper helperText="Peserta dirujuk kembali ke dokter spesialis di RS setelah 3 bulan.">
              <input
                type="text"
                className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                placeholder={
                  errors.rs_rujukan
                    ? errors.rs_rujukan.message
                    : "Rumah Sakit Rujukan"
                }
                {...register("rs_rujukan", {
                  required: "Masukkan Rumah sakit rujukan selanjutnya!",
                })}
              />
            </InputWrapper>
            <InputWrapper helperText="Akan dirujuk kembali setelah 3 bulan mulai dari tanggal ini.">
              <input
                type="date"
                className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                placeholder={
                  errors.date_rujukan ? errors.date_rujukan.message : "Tanggal"
                }
                {...register("date_rujukan", {
                  required: "Masukkan tanggal dibuatnya kartu kontrol pasien!",
                })}
              />
            </InputWrapper>
            <div className="flex justify-center mt-8">
              <ButtonFill label="SIMPAN" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
