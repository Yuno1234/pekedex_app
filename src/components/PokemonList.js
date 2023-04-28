import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPokemonData } from '../app/reducers/setPokemonData';
import { pokemonTypes } from '../utils/pokemonTypes';

export default function PokemonList({ pokemons }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div>
      {pokemons?.map((p) => {
        return <div id={p.id} key={p.id} >
          <span>{p.id}</span>
          <img src={p.sprite} onClick={() => {navigate(`/pokemon/${p.id}`); dispatch(setPokemonData({id: null, stateName: "selected"}))}} alt="NO IMAGE" loading="lazy" height="100" />
          {/* {p.types.map((type) => {
            return <span key={type}>{type} </span>
          })} */}
          {p.types.map((type) => {
                return <img key={type} src={pokemonTypes[type].image} loading="lazy" height="32" />
            })}<br/>
          <h3>{p.name}</h3>
          <button onClick={() => {dispatch(setPokemonData({id: p.id, stateName: "compare"}))}}>Add to Compare</button>
        </div>
      })}
    </div>
  )
}
