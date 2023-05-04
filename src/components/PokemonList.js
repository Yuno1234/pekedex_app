import React, {forwardRef} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pokemonTypes } from '../utils/pokemonTypes';
import { getPokemonData } from '../utils/getPokemonData';
import { addToCompare } from '../app/slices/PokemonSlice';
import { setPokemonTab } from '../app/slices/AppSlice';
import { pokemonTabs } from '../app/slices/AppSlice';

const PokemonList = forwardRef(function PokemonList({ pokemons }, ref) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleAddToCompare(id) {
    getPokemonData(id).then((data) => {
      dispatch(addToCompare(data))
    })
  }

  return (
    <div>
      {pokemons?.map((p, index) => {
        if (pokemons.length === index + 1) {
          return <div id={p.id} key={p.id} ref={ref}>
                    <span>{p.id}</span>
                    <img src={p.sprite} onClick={() => { navigate(`/pokemon/${p.id}`);  dispatch(setPokemonTab(pokemonTabs.description));}} alt="NO IMAGE" loading="lazy" height="100" />
                    {p.types.map((type) => {
                      return <img key={type} src={pokemonTypes[type].image} loading="lazy" height="32" />
                    })}<br />
                    <h3>{p.name}</h3>
                    <button onClick={() => handleAddToCompare(p.id)}>Add to Compare</button>
                  </div>
        } else {
          return <div id={p.id} key={p.id}>
                    <span>{p.id}</span>
                    <img src={p.sprite} onClick={() => { navigate(`/pokemon/${p.id}`);  dispatch(setPokemonTab(pokemonTabs.description));}} alt="NO IMAGE" loading="lazy" height="100" />
                    {p.types.map((type) => {
                      return <img key={type} src={pokemonTypes[type].image} loading="lazy" height="32" />
                    })}<br />
                    <h3>{p.name}</h3>
                    <button onClick={() => handleAddToCompare(p.id)}>Add to Compare</button>
                  </div>
        }
      })}
    </div>
  )
})

export default PokemonList