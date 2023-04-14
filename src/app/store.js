import { configureStore } from "@reduxjs/toolkit";
import { PokemonSlice } from "./slices/PokemonSlice"
import { AppSlice } from "./slices/AppSlice";

export const store = configureStore({
    reducer: {
        pokemon: PokemonSlice.reducer,
        app: AppSlice.reducer
    },
})