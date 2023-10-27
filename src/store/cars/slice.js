import { createSlice } from "@reduxjs/toolkit";
import initialState from "./state";
import { getCarByIdAsyncThunk, getCarsAsyncThunk } from "./thunk";

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        resetBehaviorStateAction: (state, action) => {
            state.isLoading = undefined
            state.isSuccess = undefined
        }
    },
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
        builder.addCase(getCarByIdAsyncThunk.pending, (state, action) => {
            state.isSuccess = false
            state.isLoading = true
        })
        builder.addCase(getCarByIdAsyncThunk.fulfilled, (state, action) => {
            state.isSuccess = true
            state.isLoading = false
            state.car = action.payload
        })
        builder.addCase(getCarByIdAsyncThunk.rejected, (state, action) => {
            state.isSuccess = false
            state.isLoading = false
        })
    }
})

export const reducer = carSlice.reducer
export const { resetBehaviorStateAction } = carSlice.actions
export const selector = (state) => state.carReducer