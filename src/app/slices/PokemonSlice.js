import { createSlice } from "@reduxjs/toolkit";
import { getPokemonsUrl } from "../reducers/getPokemonsUrl";
import { getPokemonsData } from "../reducers/getPokemonsData";


const initialState = {
    pokemonUrls: undefined,
    searchPokemon: undefined,
    selectedPokemon: undefined,
    compareQueue: [],
};

export const PokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        setSelectedPokemon: (state, action) => {
            state.selectedPokemon = action.payload
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getPokemonsUrl.fulfilled, (state, action) => {
            state.pokemonUrls = action.payload;
        });
        builder.addCase(getPokemonsData.fulfilled, (state, action) => {
            state.searchPokemon = action.payload;
            console.log(state.searchPokemon)
        });
    }
})

export const { setSelectedPokemon } = PokemonSlice.actions

