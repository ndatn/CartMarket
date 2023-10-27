import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCarByIdAsync, getCarsAsync } from "../../services/car";

export const getCarsAsyncThunk = createAsyncThunk("cars/get_car", async () => {
    try {
        return await getCarsAsync()
    } catch (error) {
        console.log(error)
        return error
    }
})

export const getCarByIdAsyncThunk = createAsyncThunk("cars/get_car_by_id", async ({ id }) => {
    try {
        return await getCarByIdAsync(id)
    } catch (error) {
        console.log(error)
        return error
    }
})