import { configureStore } from '@reduxjs/toolkit'
import carReducer from './cars/reducer'
import authReducer from './auths/reducer'

const store = configureStore({
    reducer: {
        authReducer,
        carReducer
    }
})

export default store