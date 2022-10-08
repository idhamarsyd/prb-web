import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPatient = createAsyncThunk(
  "patient/fetchPatient",
  async (url) => {
    const res = await axios.get(url);
    console.log(res);
    // const formatRes = await res.data.articles;
    // const finalData = formatRes.results;
    // return formatRes;
  }
);

export const patientSlice = createSlice({
  name: "patient",
  initialState: {
    data: [
      {
        name: "Renata",
        medicalrec: "23453434",
        address: "Jln. Sam Ratulangi",
        birth: "2000-10-12",
        bpjs: "9273458545",
        date_rujukan: "2022-08-22",
        diagnosa: "Epilepsi",
        hospital: "Abunawas",
        obat1_name: "Kutoin",
        obat1_qty: "400gr",
        obat1_schedule: "2x sehari",
        obat2_name: "",
        obat2_qty: "",
        obat2_schedule: "",
        obat3_name: "",
        obat3_qty: "",
        obat3_schedule: "",
        rs_rujukan: "Abunawas",
        telp: "0813424000110",
      },
      {
        name: "Aiden",
        medicalrec: "242344343",
        address: "Jln. Rambutan",
        birth: "1999-10-12",
        bpjs: "83457435",
        date_rujukan: "2022-08-23",
        diagnosa: "Usus Buntu",
        hospital: "Abunawas",
        obat1_name: "NSAID",
        obat1_qty: "400gr",
        obat1_schedule: "2x sehari",
        obat2_name: "",
        obat2_qty: "",
        obat2_schedule: "",
        obat3_name: "",
        obat3_qty: "",
        obat3_schedule: "",
        rs_rujukan: "Abunawas",
        telp: "0812444200022",
      },
    ],
    detailID: null,
    detailData: {},
    query: null,
    searchData: null,
    isLoading: false,
  },
  reducers: {
    updateQuery: (state, action) => {
      state.query = encodeURIComponent(action.payload);
    },
    filterData: (state, action) => {
      state.searchData = action.payload;
    },
    addPatient: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    setDetailID: (state, action) => {
      state.detailID = action.payload;
    },
    setDetailData: (state, action) => {
      state.detailData = action.payload;
    },
  },
  extraReducers: {
    [fetchPatient.fulfilled]: (state, action) => {
      // state.data = action.payload;
      // state.isLoading = false;
    },
    [fetchPatient.pending]: (state) => {
      // state.isLoading = true;
    },
  },
});

// export const { showLoading } = newsSlice.actions;
export const {
  updateQuery,
  filterData,
  addPatient,
  setDetailID,
  setDetailData,
} = patientSlice.actions;

export default patientSlice.reducer;
