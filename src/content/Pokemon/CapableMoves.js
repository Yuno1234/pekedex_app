import React from 'react'
import { useSelector } from 'react-redux'

export default function CapableMoves() {
  const selectedPokemon = useSelector(({ pokemon: { selectedPokemon } }) => selectedPokemon)

  return (
    <>
        {selectedPokemon.moves && selectedPokemon.moves.map((move) => {
            return <div key={move.name}><b>{move.name}</b> <span>{move.effect}</span></div>
        })}
    </>
  )
}
