import { createSlice } from "@reduxjs/toolkit";

export const pokemonTabs = {
    description: "description",
    evolution: "evolution",
    moves: "moves",
};

const initialState = {
    isLoading: true,
    currentPokemonTab: pokemonTabs.description
}

export const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setPokemonTab: (state, action) => {
            state.currentPokemonTab = action.payload
        }
    }
})

export const {
    setLoading,
    setPokemonTab
} = AppSlice.actions;