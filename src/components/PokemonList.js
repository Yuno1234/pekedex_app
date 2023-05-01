import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pokemonTypes } from '../utils/pokemonTypes';
import { getPokemonData } from '../utils/getPokemonData';
import { addToCompare } from '../app/slices/PokemonSlice';

export default function PokemonList({ pokemons }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleAddToCompare(id) {
    getPokemonData(id).then((data) => {
      dispatch(addToCompare(data))
    })
  }

  return (
    <div>
      {pokemons?.map((p) => {
        return <div id={p.id} key={p.id}>
          <span>{p.id}</span>
          <img src={p.sprite} onClick={() => { navigate(`/pokemon/${p.id}`);}} alt="NO IMAGE" loading="lazy" height="100" />
          {p.types.map((type) => {
            return <img key={type} src={pokemonTypes[type].image} loading="lazy" height="32" />
          })}<br />
          <h3>{p.name}</h3>
          <button onClick={() => {handleAddToCompare(p.id)}}>Add to Compare</button>
        </div>
      })}
    </div>
  )
}
