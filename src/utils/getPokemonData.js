import axios from "axios";

export async function getPokemonData(id) {
    try {
        if (!id) return null

        const generalRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

        const pokemonData = {
            id: id,
            name: generalRes.data.name,
            types: generalRes.data.types.map(type => type.type.name),
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
