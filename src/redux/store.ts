import { configureStore } from "@reduxjs/toolkit"
import countReducer from "./countReducer"

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = configureStore({
    reducer: {
    counterino: countReducer
    
    }
    
    
    
    })