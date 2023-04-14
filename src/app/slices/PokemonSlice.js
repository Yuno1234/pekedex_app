import { createSlice } from "@reduxjs/toolkit";
import { getPokemonsData } from "../reducers/getPokemonsData";
import { getPokemonsUrl } from "../reducers/getPokemonsUrl";


const initialState = {
    allPokemon: undefined,
    searchPokemon: undefined,
    currentPokemon: undefined,
    compareQueue: [],
};

export const PokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        setCurrentPokemon: (state, action) => {
            state.currentPokemon = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getPokemonsUrl.fulfilled, (state, action) => {
            state.allPokemon = action.payload;
        });
        builder.addCase(getPokemonsData.fulfilled, (state, action) => {
            state.searchPokemon = action.payload
        })
    }
})

export const { setCurrentPokemon } = PokemonSlice.actions

