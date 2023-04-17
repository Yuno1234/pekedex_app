import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsUrl } from '../app/reducers/getPokemonsUrl';
import { getPokemonsData } from '../app/reducers/getPokemonsData';
import PokemonList from '../components/PokemonList';

export default function Search() {
    const { pokemonUrls, searchPokemon }  = useSelector((state) => state.pokemon)
    const dispatch = useDispatch()
  
    useEffect(() => {
        dispatch(getPokemonsUrl())
    }, [dispatch])

    useEffect(() => {
        if (pokemonUrls) {
            const pokemonUrlsCopy = [...pokemonUrls];
            const reducedPokemonUrl = pokemonUrlsCopy
                .sort((a, b) => a - b)
                .slice(0, 200);
            dispatch(getPokemonsData(reducedPokemonUrl))   
        }
    }, [pokemonUrls, dispatch])



  return (
    <>
        <div className='search'>
            <h1>Search</h1>
            <input
                type="text"
            />
            <PokemonList pokemons={searchPokemon} />
        </div>
    </>    
  )
}
