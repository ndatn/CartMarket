import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCars } from "../../services/car";

export const getCarsAsyncThunk = createAsyncThunk("cars/get_car", async () => {
    try {
        return await getCars()
    } catch (error) {
        console.log(error)
        return error
    }
})