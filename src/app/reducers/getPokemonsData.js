import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemonsData = createAsyncThunk(
    "pokemon/pokemonsData",
    async(pokemons) => {
        try {
            const pokemonsData = []
            for await (const pokemon of pokemons) {
                const { data } = await axios.get(pokemon.url)
                const typeNames = data.types.map(type => type.type.name)
                pokemonsData.push({
                    id: data.id,
                    name: data.name,
                    types: typeNames,
                    sprite: data.sprites["other"]["official-artwork"]["front_default"]
                })
            }
            return pokemonsData
        } catch (err) {
            console.error(err)
        }
    }
)