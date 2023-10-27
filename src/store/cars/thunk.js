import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCarsAsync } from "../../services/car";

export const getCarsAsyncThunk = createAsyncThunk("cars/get_car", async () => {
    try {
        return await getCarsAsync()
    } catch (error) {
        console.log(error)
        return error
    }
})