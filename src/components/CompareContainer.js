import React from 'react'
import Loader from './Loader'

export default function CompareContainer({pokemon}) {
  return (
    <>
        {pokemon ? (
            <div>
                <h1>{pokemon.name}</h1>
                <p>
                    types: {pokemon.types.map((type) => {
                        return <span key={type}>{type} </span>
                    })}<br/>
                    height: {pokemon.height}<br/>
                    weight: {pokemon.weight}
                </p>
                <img src={pokemon.sprite} alt="NO IMAGE" loading="lazy" height="500" />
                <p>
                    HP: {pokemon.stats[0]}<br/>
                    AT: {pokemon.stats[1]}<br/>
                    DF: {pokemon.stats[2]}<br/>
                    SA: {pokemon.stats[3]}<br/>
                    SD: {pokemon.stats[4]}<br/>
                    SP: {pokemon.stats[5]}<br/>
                </p>
            </div>
        ) : (
            <h2>Select a Pokemon to Compare</h2>
        )} 
    </>
  )
}
