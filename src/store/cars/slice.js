import { createSlice } from "@reduxjs/toolkit";
import initialState from "./state";
import { getCarsAsyncThunk } from "./thunk";

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCarsAsyncThunk.pending, (state, action) => {
            state.isSuccess = false
        }) 
        builder.addCase(getCarsAsyncThunk.fulfilled, (state, action) => {
            state.cars = action.payload
            state.isSuccess = true
        })
        builder.addCase(getCarsAsyncThunk.rejected, (state, action) => {
            state.isSuccess = false
        })
    }
})

export const reducer = carSlice.reducer
export const { } = carSlice.actions
export const selector = (state) => state.carReducer