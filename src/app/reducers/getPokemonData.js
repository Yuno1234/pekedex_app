import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemonData = createAsyncThunk(
    "pokemon/pokemonData",
    async(pokemonId) => {
        try {
            const generalRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            // const evolutionRes = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${pokemonId}`)
            const pokemonData = {
                id: pokemonId,
                name: generalRes.data.name,
                type: generalRes.data.types.map(type => type.type.name),
                sprite: generalRes.data.sprites["other"]["official-artwork"]["front_default"],
                height: generalRes.data.height,
                weight: generalRes.data.weight,
                stats: generalRes.data.stats.map(stat => stat.base_stat),
                abilities: generalRes.data.abilities.map(ability => ability.ability.name)
            }
            return pokemonData
        } catch (err) {
            console.log(err)
        }
    }
)