import React from 'react'
import { useSelector } from 'react-redux'

export default function Evolution() {
    const selectedPokemon = useSelector(({ pokemon: { selectedPokemon } }) => selectedPokemon)

    return (
        <div>{selectedPokemon.evolutionLevel}</div>
    )
}
