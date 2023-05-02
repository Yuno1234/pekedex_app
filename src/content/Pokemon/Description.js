import React from 'react'
import { useSelector } from 'react-redux'
import { pokemonTypes } from '../../utils/pokemonTypes'

export default function Description() {
    const selectedPokemon = useSelector(({ pokemon: { selectedPokemon } }) => selectedPokemon)

  return (
    <>
        <p>
            types: {selectedPokemon.types.map((type) => {
                return <img key={type} src={pokemonTypes[type].image} loading="lazy" height="64" />
            })}<br />
            height: {selectedPokemon.height}<br />
            weight: {selectedPokemon.weight}
        </p>
        <img src={selectedPokemon.sprite} alt="NO IMAGE" loading="lazy" height="500" />
        <p>
            HP: {selectedPokemon.stats[0]}<br />
            AT: {selectedPokemon.stats[1]}<br />
            DF: {selectedPokemon.stats[2]}<br />
            SA: {selectedPokemon.stats[3]}<br />
            SD: {selectedPokemon.stats[4]}<br />
            SP: {selectedPokemon.stats[5]}<br />
        </p>
    </>

  )
}
