import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setPokemonData = createAsyncThunk(
    "pokemon/pokemonData",
    async(args) => {
        try {
            if (!args.id) return {data: null, stateName: args.stateName}

            const generalRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${args.id}`)

            const pokemonData = {
                id: args.id,
                name: generalRes.data.name,
                types: generalRes.data.types.map(type => type.type.name),
                sprite: generalRes.data.sprites["other"]["official-artwork"]["front_default"],
                height: generalRes.data.height,
                weight: generalRes.data.weight,
                stats: generalRes.data.stats.map(stat => stat.base_stat),
                abilities: generalRes.data.abilities.map(ability => ability.ability.name)
            }
            return {data: pokemonData, stateName: args.stateName}
        } catch (err) {
            console.log(err)
        }
    }
)