import { createSlice, current } from "@reduxjs/toolkit";
import { getPokemonsUrl } from "../reducers/getPokemonsUrl";
import { getPokemonsData } from "../reducers/getPokemonsData";
import { setPokemonData } from "../reducers/setPokemonData";

// {
//     id: 1,
//     name: "bulbasaur",
//     types: ["grass", "poison"],
//     sprite: null,
//     height: 30,
//     weight: 25,
//     stats: [50, 23, 45, 32, 12, 43],
//     abilities: null
// }

const initialState = {
    pokemonUrls: null,
    searchPokemon: null,
    selectedPokemon: null,
    compareQueue: [],
};

export const PokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder.addCase(getPokemonsUrl.fulfilled, (state, action) => {
            state.pokemonUrls = action.payload;
        });
        builder.addCase(getPokemonsData.fulfilled, (state, action) => {
            state.searchPokemon = action.payload;
        });
        builder.addCase(setPokemonData.fulfilled, (state, action) => {
            if (action.payload.stateName === "selected") {
                state.selectedPokemon = action.payload.data
            }

            if (action.payload.stateName === "compare") {
                const index = state.compareQueue.findIndex(
                    (pokemon) => pokemon.id === action.payload.data.id
                );

                if (index === -1) {
                    const compareQueue = [...state.compareQueue]
                    if (state.compareQueue.length >= 2) {
                        compareQueue.shift()
                    }
                    compareQueue.push(action.payload.data)
                    state.compareQueue = compareQueue
                } 
            }
        })
    }
})

export const {} = PokemonSlice.actions

