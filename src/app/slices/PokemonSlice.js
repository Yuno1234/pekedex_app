import { createSlice } from "@reduxjs/toolkit";
import { getPokemonsUrl } from "../reducers/getPokemonsUrl";
import { getPokemonsData } from "../reducers/getPokemonsData";
import { getPokemonData } from "../reducers/getPokemonData";


const initialState = {
    pokemonUrls: undefined,
    searchPokemon: undefined,
    currentPokemon: undefined,
    compareQueue: [],
};

export const PokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    // reducers: {
    // },

    extraReducers: (builder) => {
        builder.addCase(getPokemonsUrl.fulfilled, (state, action) => {
            state.pokemonUrls = action.payload;
        });
        builder.addCase(getPokemonsData.fulfilled, (state, action) => {
            state.searchPokemon = action.payload;
        })
        builder.addCase(getPokemonData.fulfilled, (state, action) => {
            state.currentPokemon = action.payload;
            console.log(state.currentPokemon)
        })
    }
})

// export const { setCurrentPokemon } = PokemonSlice.actions

