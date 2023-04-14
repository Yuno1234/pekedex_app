import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
}

export const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export const {
    setLoading,
} = AppSlice.actions;