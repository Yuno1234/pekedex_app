import { createSlice, current } from "@reduxjs/toolkit";
import { getPokemonsUrl } from "../reducers/getPokemonsUrl";
import { getPokemonsData } from "../reducers/getPokemonsData";


const initialState = {
    pokemonUrls: null,
    searchPokemon: [],
    selectedPokemon: null,
    compareQueue: [],
};

export const PokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        setSelectedPokemon: (state, action) => {
            state.selectedPokemon = action.payload
        },
        addToCompare: (state, action) => {
            const index = state.compareQueue.findIndex(
                (pokemon) => pokemon.id === action.payload.id
            );

            if (index === -1) {
                const compareQueue = [...state.compareQueue]
                if (state.compareQueue.length >= 2) {
                    compareQueue.shift()
                }
                compareQueue.push(action.payload)
                state.compareQueue = compareQueue
            }
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getPokemonsUrl.fulfilled, (state, action) => {
            state.pokemonUrls = action.payload;
        });
        builder.addCase(getPokemonsData.fulfilled, (state, action) => {
            state.searchPokemon = action.payload;
        });
    }
})

export const { 
    setSelectedPokemon,
    addToCompare 
} = PokemonSlice.actions

        // builder.addCase(setPokemonData.fulfilled, (state, action) => {
        //     if (action.payload.stateName === "selected") {
        //         state.selectedPokemon = action.payload.data
        //     }

        //     if (action.payload.stateName === "compare") {
        //         const index = state.compareQueue.findIndex(
        //             (pokemon) => pokemon.id === action.payload.data.id
        //         );

        //         if (index === -1) {
        //             const compareQueue = [...state.compareQueue]
        //             if (state.compareQueue.length >= 2) {
        //                 compareQueue.shift()
        //             }
        //             compareQueue.push(action.payload.data)
        //             state.compareQueue = compareQueue
        //         } 
        //     }
        // })