import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPokemonData } from '../app/reducers/getPokemonData';

export default function PokemonList({ pokemons }) {
  // const searchPokemon = useSelector((state) =>  state.pokemon.searchPokemon)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div>
      {pokemons?.map((p) => {
        return <div id={p.id} key={p.id}>
          <span>{p.id}</span>
          <img src={p.sprite} alt="NO IMAGE" height="100" />
          {p.types.map((type) => {
            return <span key={type}>{type} </span>
          })}
          <h3>{p.name}</h3>
        </div>
      })}
    </div>
  )
}
