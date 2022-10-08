import React, { useState, useEffect } from "react";
import { ButtonFill } from "../components/atoms/ButtonFill";
import { InputField } from "../components/molecules/InputField";
import { Heading } from "../components/atoms/Heading";
import { Card } from "../components/molecules/Card";
import { useSelector, useDispatch } from "react-redux";
import { updateQuery, fetchPatient } from "../redux/patientReducer";
import { useNavigate } from "react-router-dom";
import { filterData, setDetailID } from "../redux/patientReducer";
import arrowBack from "../assets/icons/arrow_back.svg";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, query, searchData } = useSelector((state) => state.patient);
  const [queryData, setQueryData] = useState(null);

  useEffect(() => {
    dispatch(
      fetchPatient(
        "https://083f-2001-448a-7023-46a0-53-8795-536d-472d.ap.ngrok.io/patients"
      )
    );
  }, []);

  const onChangeHandler = (e) => {
    if (e.target.value.length === 0) {
      dispatch(updateQuery(null));
    } else {
      dispatch(updateQuery(e.target.value));
    }
    console.log(encodeURIComponent(query));
  };

  const filterAction = () => {
    data.filter((patient) => {
      if (patient.medicalrec === query) {
        const newData = [];
        newData.push(patient);
        setQueryData(patient);
        dispatch(filterData(newData));
      }
    });
  };

  const exitSearch = () => {
    setQueryData(null);
    dispatch(filterData(null));
    console.log("RESET");
  };

  const searchHeading = () => {
    return (
      <div className="flex flex-row gap-5">
        <a onClick={() => exitSearch()} className="flex">
          <img src={arrowBack} alt="arrowBack" className="cursor-pointer" />
        </a>
        <Heading label="Hasil pencarian pasien" />
      </div>
    );
  };
  const pressHandler = async (id) => {
    await dispatch(setDetailID(id));
    await navigate(`/patient/${id}`);
    // dispatch(fetchMovieDetail(id));
  };

  return (
    <div>
      <div className="w-1/2 border-2 mx-auto h-screen border-x-[#FAFAFA] flex flex-col gap-10 p-8">
        <div className="flex flex-col gap-6">
          {queryData != null ? (
            searchHeading()
          ) : (
            <Heading label="Program Rujuk Balik" />
          )}
          <div className="flex flex-row items-center w-full justify-between">
            <InputField
              type="number"
              placeholder="Cari pasien..."
              button={true}
              helperText="Masukkan nomor medical record."
              buttonLabel="CARI"
              onChange={(e) => onChangeHandler(e)}
              buttonAction={() => filterAction()}
            />
            <ButtonFill
              label="TAMBAH PASIEN"
              onClick={() => navigate("/new-patient")}
            />
          </div>
        </div>
        {searchData != null ? (
          <div className="flex flex-col gap-5">
            {searchData.map((patient) => (
              <Card
                name={patient.name}
                id={patient.medicalrec}
                onPress={() => pressHandler(patient.medicalrec)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {data.map((patient) => (
              <Card
                name={patient.name}
                id={patient.medicalrec}
                onPress={() => pressHandler(patient.medicalrec)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
