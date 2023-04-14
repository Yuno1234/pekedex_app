import {useState, useEffect} from 'react'
import axios from 'axios'
import PokemonList from '../components/PokemonList';

export default function Search() {
    const [pokemon, setPokemon] = useState([])

    const getAllPokemon = async() => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=2000");
      getPokemonData(res.data.results)
    }
  
    const getPokemonData = async(res) => {
      res.map(async(pokemon) => {
        const result = await axios.get(pokemon.url)
        
        setPokemon(state => {
          state = [...state, {
            id: result.data.id,
            name: result.data.name,
            types: result.data.types,
            sprite: result.data.sprites.other.home.front_default
          }]
          return state
        })
      })
    }
  
    useEffect(() => {
      getAllPokemon()
    }, [])

  return (
    <>
        <h1>Search</h1>
        <PokemonList pokemon={pokemon}/>
    </>    
  )
}
