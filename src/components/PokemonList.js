import React from 'react'
import { useSelector } from 'react-redux';

export default function PokemonList({}) {
  const searchPokemon = useSelector((state) =>  state.pokemon.searchPokemon)

  return (
    <div>
        {searchPokemon?.map((p) => {
            return <div id={p.id} key={p.id}><span>{p.id}</span><img src={p.sprite} height="100"/><span>{p.name}</span></div>
        })}
    </div>
  )
}
