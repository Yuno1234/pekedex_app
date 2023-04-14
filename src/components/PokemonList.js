import React from 'react'

export default function PokemonList({ pokemon }) {
  return (
    <div>
        {pokemon.map(p => {
            return <div id={p.id} key={p.id}><img src={p.sprite} height="200"/><h3>{p.name}</h3></div>
        })}
    </div>
  )
}
