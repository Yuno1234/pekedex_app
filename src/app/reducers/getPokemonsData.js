import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemonsData = createAsyncThunk(
    "pokemon/pokemonsData",
    async(pokemons) => {
        try {
            const pokemonsData = []
            for await (const pokemon of pokemons) {
                const res = await axios.get(pokemon.url)
                const typeNames = res.data.types.map(type => type.type.name)
                pokemonsData.push({
                    id: res.data.id,
                    name: res.data.name,
                    types: typeNames,
                    sprite: res.data.sprites["other"]["official-artwork"]["front_default"]
                })
            }
            return pokemonsData
        } catch (err) {
            console.error(err)
        }
    }
)