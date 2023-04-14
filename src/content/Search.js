import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsUrl } from '../app/reducers/getPokemonsUrl';
import { getPokemonsData } from '../app/reducers/getPokemonsData';
import Loader from '../components/Loader';
import { setLoading } from '../app/slices/AppSlice';
import PokemonList from '../components/PokemonList';

export default function Search() {
    const { allPokemon, searchPokemon }  = useSelector((state) => state.pokemon)
    const isLoading = useSelector((state) =>  state.app.isLoading)
    const dispatch = useDispatch()
  
    useEffect(() => {
        dispatch(getPokemonsUrl())
    }, [dispatch])

    useEffect(() => {
        if (allPokemon) {
            console.log(allPokemon)
            if (allPokemon) {
                const clonedPokemons = [...allPokemon];
                dispatch(getPokemonsData(clonedPokemons))   
            }
        }
    }, [allPokemon, dispatch])

    useEffect(() => {
        if (searchPokemon) {
            dispatch(setLoading(false))
            console.log(searchPokemon)
        }
    }, [searchPokemon, dispatch])

  return (
    <>
        {isLoading ? (
            <Loader />
        ) : (
            <div className='search'>
                <h1>Search</h1>
                <PokemonList /> 
            </div>
        )}
        
    </>    
  )
}
