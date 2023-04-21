import axios from "axios"


export async function getPokemonData(id) {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return {
        id: id,
        name: data.name,
        types: data.types.map(type => type.type.name),
        sprite: data.sprites["other"]["official-artwork"]["front_default"],
        height: data.height,
        weight: data.weight,
        stats: data.stats.map(stat => stat.base_stat),
        abilities: data.abilities.map(ability => ability.ability.name)
    }
}