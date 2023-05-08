import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsUrl } from '../app/reducers/getPokemonsUrl';
import { getPokemonsData } from '../app/reducers/getPokemonsData';
import PokemonList from '../components/PokemonList';
import { debounce } from '../utils/debounce';
import Loader from '../components/Loader';
import { setLoading } from '../app/slices/AppSlice';
import { clearSearchPokemon } from '../app/slices/PokemonSlice';

export default function Search() {
    const { pokemonUrls, searchPokemon }  = useSelector((state) => state.pokemon)
    const handleChange = debounce((input) => filterPokemon(input), 200)
    const isLoading = useSelector(({ app: {isLoading} }) => isLoading)
    
    const dispatch = useDispatch()
    const observerTarget = useRef(null)
    const [isSearching, setIsSearching] = useState(false)
    const [filteredPokemon, setFilteredPokemon] = useState([])

    function reducePokemon() {
        const pokemonUrlsCopy = [...pokemonUrls];
        const reducedPokemonUrl = pokemonUrlsCopy
            .sort((a, b) => a - b)
            .slice(0, 50);
        dispatch(getPokemonsData(reducedPokemonUrl)) 
    }

    const filterPokemon = async(input) => {
        if (input.length) {
            setIsSearching(true)
            const pokemons = pokemonUrls.filter((pokemon) => 
                pokemon.name.includes(input.toLowerCase())
            );
            setFilteredPokemon(pokemons)
            dispatch(clearSearchPokemon())
            dispatch(getPokemonsData(pokemons.slice(0, 50)))
        } else {
            setIsSearching(false)
            dispatch(clearSearchPokemon())
            reducePokemon()
        }
    }

    useEffect(() => {
        dispatch(getPokemonsUrl())
    }, [dispatch])

    useEffect(() => {
        if (pokemonUrls && !searchPokemon.length) {
            reducePokemon()  
        }
    }, [pokemonUrls, dispatch])

    useEffect(() => {
        if (searchPokemon) {
            dispatch(setLoading(false))
        }
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
          entries => {
            if (entries[0].isIntersecting) {
              observer.unobserve(observerTarget.current);
              if (isSearching) {
                const index = searchPokemon.indexOf(searchPokemon[searchPokemon.length - 1])
                const nextFilteredPokemon = filteredPokemon.slice(index + 1, index + 51)
                dispatch(getPokemonsData(nextFilteredPokemon))
              } else {
                const id = searchPokemon[searchPokemon.length - 1].id;
                const nextPokemonUrls = pokemonUrls.slice(id, id + 50);
                dispatch(getPokemonsData(nextPokemonUrls))
              }
              
            }
          },
          { threshold: 0 }
        );
      
        if (observerTarget.current) {
          observer.observe(observerTarget.current);
        }
      
        return () => {
          if (observerTarget.current) {
            observer.unobserve(observerTarget.current);
          }
        };
    }, [observerTarget, searchPokemon]);

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
                <div className='flex justify-center max-w-full'>
                  <PokemonList pokemons={searchPokemon} ref={observerTarget} />
                </div>
                
            </div>
        )} 
    </>    
  )
}
