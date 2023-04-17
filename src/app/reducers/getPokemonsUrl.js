import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemonsUrl = createAsyncThunk(
    "pokemon/pokemonsUrl",
    async() => {
        try {
            const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=3000");
            return data.results;
        } catch (err) {
            console.error(err)
        }
    }
)