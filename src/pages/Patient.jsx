import React, { useState, useEffect } from "react";
import { Heading } from "../components/atoms/Heading";
import { ButtonFill } from "../components/atoms/ButtonFill";
import { InputField } from "../components/molecules/InputField";
import arrowBack from "../assets/icons/arrow_back.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InputWrapper } from "../components/atoms/InputWrapper";
import { useSelector, useDispatch } from "react-redux";

import { addPatient, filterData, setDetailData } from "../redux/patientReducer";

export const Patient = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { detailID, detailData, data } = useSelector((state) => state.patient);

  useEffect(() => {
    const fetchData = async (id) => {
      await dispatch(
        setDetailData(data.filter((patient) => patient.medicalrec === id))
      );
    };

    fetchData(detailID);
  }, [detailID]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitAction = () => {
    // fetching ke reducer buku kontrol, ambil juga medical rec nya so that they can be connected.
    console.log("hello");
  };

  const exitPatient = () => {
    // setQueryData(null);
    dispatch(filterData(null));
    navigate("/");
  };

  return (
    <div>
      <div className="w-1/2 border-2 mx-auto h-auto border-x-[#FAFAFA] flex flex-col gap-10 p-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-5">
            <a onClick={() => exitPatient()} className="flex">
              <img src={arrowBack} alt="arrowBack" className="cursor-pointer" />
            </a>
            <Heading label="Detail Pasien" />
          </div>
          <form onSubmit={handleSubmit(submitAction)}>
            <InputWrapper helperText="Nama lengkap pasien.">
              <input
                disabled
                type="text"
                className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                placeholder={detailData[0]?.name}
                // {...register("name", { required: "Dibutuhkan nama pasien!" })}
              />
            </InputWrapper>
            <InputWrapper helperText="Nomor BPJS pasien.">
              <input
                disabled
                type="number"
                className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                placeholder={detailData[0]?.bpjs}
                // {...register("bpjs", {
                //   required: "Dibutuhkan nomor BPJS pasien!",
                // })}
              />
            </InputWrapper>
            <InputWrapper helperText="Nomor Medical Record pasien.">
              <input
                disabled
                type="number"
                className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                placeholder={detailData[0]?.medicalrec}
                // {...register("medicalrec", {
                //   required: "Dibutuhkan nomor Medical Record pasien!",
                // })}
              />
            </InputWrapper>
            <InputWrapper helperText="Tanggal lahir pasien.">
              <input
                disabled
                type="text"
                className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                placeholder={detailData[0]?.birth}
                // {...register("birth", {
                //   required: "Masukkan tanggal lahir pasien!",
                // })}
              />
            </InputWrapper>
            <InputWrapper helperText="Alamat lengkap pasien.">
              <input
                disabled
                type="text"
                className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                placeholder={detailData[0]?.address}
                // {...register("address", {
                //   required: "Masukkan alamat pasien!",
                // })}
              />
            </InputWrapper>
            <InputWrapper helperText="Nomor Telepon pasien.">
              <input
                disabled
                type="text"
                className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                placeholder={detailData[0]?.telp}
                // {...register("telp", {
                //   required: "Masukkan nomor telepon pasien!",
                // })}
              />
            </InputWrapper>
            <InputWrapper helperText="Rumah sakit tempat pasien berobat.">
              <input
                disabled
                type="text"
                className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                placeholder={detailData[0]?.hospital}
                // {...register("hospital", {
                //   required: "Masukkan rumah sakit tempat pasien berobat!",
                // })}
              />
            </InputWrapper>
            <InputWrapper helperText="Diagnosa pasien.">
              <input
                disabled
                type="text"
                className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                placeholder={detailData[0]?.diagnosa}
                // {...register("diagnosa", {
                //   required: "Masukkan hasil diagnosa pasien!",
                // })}
              />
            </InputWrapper>
            <div className="flex flex-col mt-6 mb-6">
              <h1 className="font-sans text-base antialiased font-bold">
                Obat 1
              </h1>
              <InputWrapper helperText="Masukkan nama obat.">
                <input
                  disabled
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={detailData[0]?.obat1_name}
                  // {...register("obat1_name")}
                />
              </InputWrapper>
              <InputWrapper helperText="Jumalh obat, misal 300gr.">
                <input
                  disabled
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={detailData[0]?.obat1_qty}
                  // {...register("obat1_qty")}
                />
              </InputWrapper>
              <InputWrapper helperText="Jadwal konsumsi obat, misal: 2x sehari.">
                <input
                  disabled
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={detailData[0]?.obat1_schedule}
                  // {...register("obat1_schedulue")}
                />
              </InputWrapper>
            </div>
            <div className="flex flex-col mt-6 mb-6">
              <h1 className="font-sans text-base antialiased font-bold">
                Obat 2
              </h1>
              <InputWrapper helperText="Masukkan nama obat.">
                <input
                  disabled
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={detailData[0]?.obat2_name}
                  // {...register("obat2_name")}
                />
              </InputWrapper>
              <InputWrapper helperText="Jumalh obat, misal 300gr.">
                <input
                  disabled
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={detailData[0]?.obat2_qty}
                  {...register("obat2_qty")}
                />
              </InputWrapper>
              <InputWrapper helperText="Jadwal konsumsi obat, misal: 2x sehari.">
                <input
                  disabled
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={detailData[0]?.obat2_schedule}
                  // {...register("obat2_schedulue")}
                />
              </InputWrapper>
            </div>
            <div className="flex flex-col mt-6 mb-6">
              <h1 className="font-sans text-base antialiased font-bold">
                Obat 3
              </h1>
              <InputWrapper helperText="Masukkan nama obat.">
                <input
                  disabled
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={detailData[0]?.obat3_name}
                  // {...register("obat3_name")}
                />
              </InputWrapper>
              <InputWrapper helperText="Jumalh obat, misal 300gr.">
                <input
                  disabled
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={detailData[0]?.obat3_qty}
                  // {...register("obat3_qty")}
                />
              </InputWrapper>
              <InputWrapper helperText="Jadwal konsumsi obat, misal: 2x sehari.">
                <input
                  disabled
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={detailData[0]?.obat3_schedule}
                  // {...register("obat3_schedulue")}
                />
              </InputWrapper>
            </div>
            {/* <h1 className="font-sans text-sm antialiased font-bold text-gray-500 mb-10">
              Obat tersebut di atas diberikan untuk tiap bulan selama 3 bulan
            </h1> */}
            <h1 className="font-sans text-base antialiased font-bold">
              Rujukan Selanjutnya
            </h1>
            <InputWrapper helperText="Peserta dirujuk kembali ke dokter spesialis di RS setelah 3 bulan.">
              <input
                disabled
                type="text"
                className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                placeholder={detailData[0]?.rs_rujukan}
                // {...register("rs_rujukan", {
                //   required: "Masukkan Rumah sakit rujukan selanjutnya!",
                // })}
              />
            </InputWrapper>
            <InputWrapper helperText="Akan dirujuk kembali setelah 3 bulan mulai dari tanggal ini.">
              <input
                disabled
                type="text"
                className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                placeholder={detailData[0]?.date_rujukan}
                // {...register("date_rujukan", {
                //   required: "Masukkan tanggal dibuatnya kartu kontrol pasien!",
                // })}
              />
            </InputWrapper>
            <div className="flex flex-col mt-6 mb-6">
              <h1 className="font-sans text-base antialiased font-bold">
                Buku Kontrol 1
              </h1>
              <InputWrapper helperText="Masukkan tanggal jadwal kontrol yang dilakukan.">
                <input
                  type="date"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={
                    errors.jadwal_kontrol1
                      ? errors.jadwal_kontrol1.message
                      : "Tanggal Kontrol"
                  }
                  {...register("jadwal_kontrol1", {
                    required: "Masukkan tanggal jadwal kontrol yang dilakukan!",
                  })}
                />
              </InputWrapper>
              <InputWrapper helperText="Masukkan hasil pemeriksaan.">
                <input
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={
                    errors.hasil_kontrol1
                      ? errors.hasil_kontrol1.message
                      : "Hasil Pemeriksaan"
                  }
                  {...register("hasil_kontrol1", {
                    required: "Masukkan hasil pemeriksaan dari jadwal kontrol!",
                  })}
                />
              </InputWrapper>
              <InputWrapper helperText="Tambahkan catatan.">
                <input
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder="Catatan tambahan"
                  {...register("catatan_kontrol1")}
                />
              </InputWrapper>
            </div>
            <div className="flex flex-col mt-6 mb-6">
              <h1 className="font-sans text-base antialiased font-bold">
                Buku Kontrol 2
              </h1>
              <InputWrapper helperText="Masukkan tanggal jadwal kontrol yang dilakukan.">
                <input
                  type="date"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={
                    errors.jadwal_kontrol2
                      ? errors.jadwal_kontrol2.message
                      : "Tanggal Kontrol"
                  }
                  {...register("jadwal_kontrol2", {
                    required: "Masukkan tanggal jadwal kontrol yang dilakukan!",
                  })}
                />
              </InputWrapper>
              <InputWrapper helperText="Masukkan hasil pemeriksaan.">
                <input
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={
                    errors.hasil_kontrol2
                      ? errors.hasil_kontrol2.message
                      : "Hasil Pemeriksaan"
                  }
                  {...register("hasil_kontrol2", {
                    required: "Masukkan hasil pemeriksaan dari jadwal kontrol!",
                  })}
                />
              </InputWrapper>
              <InputWrapper helperText="Tambahkan catatan.">
                <input
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder="Catatan tambahan"
                  {...register("catatan_kontrol2")}
                />
              </InputWrapper>
            </div>
            <div className="flex flex-col mt-6 mb-6">
              <h1 className="font-sans text-base antialiased font-bold">
                Buku Kontrol 3
              </h1>
              <InputWrapper helperText="Masukkan tanggal jadwal kontrol yang dilakukan.">
                <input
                  type="date"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={
                    errors.jadwal_kontrol3
                      ? errors.jadwal_kontrol3.message
                      : "Tanggal Kontrol"
                  }
                  {...register("jadwal_kontrol3", {
                    required: "Masukkan tanggal jadwal kontrol yang dilakukan!",
                  })}
                />
              </InputWrapper>
              <InputWrapper helperText="Masukkan hasil pemeriksaan.">
                <input
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder={
                    errors.hasil_kontrol3
                      ? errors.hasil_kontrol3.message
                      : "Hasil Pemeriksaan"
                  }
                  {...register("hasil_kontrol3", {
                    required: "Masukkan hasil pemeriksaan dari jadwal kontrol!",
                  })}
                />
              </InputWrapper>
              <InputWrapper helperText="Tambahkan catatan.">
                <input
                  type="text"
                  className="font-sans p-4 focus:outline-none text-base font-medium placeholder:text-black w-full"
                  placeholder="Catatan tambahan"
                  {...register("catatan_kontrol3")}
                />
              </InputWrapper>
            </div>
            <div className="flex justify-center mt-8">
              <ButtonFill label="SIMPAN" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
