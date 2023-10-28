import { createSlice } from "@reduxjs/toolkit";
import authState from './state'
import { decodeTokenThunk, loginAsyncThunk, registerAsyncThunk } from "./thunk";

const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {
        resetIsSuccessState: (state, action) => {
            state.isSuccess = undefined
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginAsyncThunk.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(loginAsyncThunk.fulfilled, (state, action) => {
            state.isSuccess = true
            state.isLoading = false
            state.accessToken = action.payload?.accessToken
        })
        builder.addCase(loginAsyncThunk.rejected, (state, action) => {
            state.isSuccess = false
            state.isLoading = false
        })
        builder.addCase(registerAsyncThunk.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(registerAsyncThunk.fulfilled, (state, action) => {
            state.isSuccess = true,
            state.isLoading = false
        })
        builder.addCase(registerAsyncThunk.rejected, (state, action) => {
            state.isSuccess = false,
            state.isLoading = false
        })
        builder.addCase(decodeTokenThunk.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(decodeTokenThunk.fulfilled, (state, action) => {
            state.isLoading = false,
            state.isSuccess = action.payload.isSuccess,
            state.email = action.payload.email
        })
        builder.addCase(decodeTokenThunk.rejected, (state, action) => {
            state.isSuccess = false,
            state.isLoading = false
        })
    }
})

export const authReducer = authSlice.reducer
export const authSelector = (state) => state.authReducer
export const { resetIsSuccessState } = authSlice.actions