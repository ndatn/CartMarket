import { configureStore } from '@reduxjs/toolkit'
import carReducer from './cars/reducer'

const store = configureStore({
    reducer: {
        carReducer
    }
})

export default store