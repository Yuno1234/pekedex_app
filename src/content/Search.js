import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsUrl } from '../app/reducers/getPokemonsUrl';
import { getPokemonsData } from '../app/reducers/getPokemonsData';
import PokemonList from '../components/PokemonList';

export default function Search() {
    const { pokemonUrls, searchPokemon }  = useSelector((state) => state.pokemon)
    const handleChange = debounce((input) => filterPokemon(input), 200)
    const dispatch = useDispatch()
  
    function debounce(fn, timeout) {
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => {
            fn.apply(this, args);
          }, timeout);
        };
      }

    function reducePokemon() {
        const pokemonUrlsCopy = [...pokemonUrls];
        const reducedPokemonUrl = pokemonUrlsCopy
            .sort((a, b) => a - b)
            .slice(0, 50);
        dispatch(getPokemonsData(reducedPokemonUrl)) 
    }

    useEffect(() => {
        dispatch(getPokemonsUrl())
    }, [dispatch])

    useEffect(() => {
        if (pokemonUrls) {
            reducePokemon()  
        }
    }, [pokemonUrls, dispatch])

    const filterPokemon = async(input) => {
        if (input.length) {
            const pokemons = pokemonUrls.filter((pokemon) => 
                pokemon.name.includes(input.toLowerCase())
            );
            dispatch(getPokemonsData(pokemons.slice(0, 50)))
        } else {
            reducePokemon()
        }
    }

  return (
    <>
        <div className='search'>
            <h1>Search</h1>
            <input
                type="text"
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Search Pokemon"
            />
            <PokemonList pokemons={searchPokemon} />
        </div>
    </>    
  )
}
