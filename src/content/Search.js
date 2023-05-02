import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsUrl } from '../app/reducers/getPokemonsUrl';
import { getPokemonsData } from '../app/reducers/getPokemonsData';
import PokemonList from '../components/PokemonList';
import { debounce } from '../utils/debounce';
import Loader from '../components/Loader';
import { setLoading } from '../app/slices/AppSlice';

export default function Search() {
    const { pokemonUrls, searchPokemon }  = useSelector((state) => state.pokemon)
    const handleChange = debounce((input) => filterPokemon(input), 200)
    const isLoading = useSelector(({ app: {isLoading} }) => isLoading)
    const dispatch = useDispatch()

    function reducePokemon() {
        const pokemonUrlsCopy = [...pokemonUrls];
        const reducedPokemonUrl = pokemonUrlsCopy
            .sort((a, b) => a - b)
            .slice(0, 50);
        dispatch(getPokemonsData(reducedPokemonUrl)) 
    }

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

    useEffect(() => {
        dispatch(getPokemonsUrl())
    }, [dispatch])

    useEffect(() => {
        if (pokemonUrls) {
            reducePokemon()  
        }
    }, [pokemonUrls, dispatch])

    useEffect(() => {
        if (searchPokemon) {
            dispatch(setLoading(false))
        }
    })

  return (
    <>
        {isLoading ? (
            <Loader />
        ) : (
            <div className='search'>
                <h1>Search</h1>
                <input
                    type="text"
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="Search Pokemon"
                />
                <PokemonList pokemons={searchPokemon} />
            </div>
        )}  
    </>    
  )
}
