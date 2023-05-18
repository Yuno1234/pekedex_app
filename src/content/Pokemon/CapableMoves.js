import React from 'react'
import { useSelector } from 'react-redux'
import { pokemonTypes } from '../../utils/pokemonTypes'

export default function CapableMoves() {
  const selectedPokemon = useSelector(({ pokemon: { selectedPokemon } }) => selectedPokemon)

  return (
    <div className={`flex justify-center bg-gradient-to-t from-[${pokemonTypes[selectedPokemon.types[Math.floor(Math.random() * selectedPokemon.types.length)]].color}] to-100% ...`}>
      <div>
        <div className='mx-4 my-6'>
          <h2 className='text-2xl font-bold'>#{selectedPokemon.id}</h2>
          <h1 className='text-3xl font-extrabold'>{selectedPokemon.name.toUpperCase()}</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Accuracy</th>
              <th>Class</th>
              <th>Power</th>
              <th>PP</th>
            </tr>
          </thead>
          <tbody>
            {selectedPokemon.moves && selectedPokemon.moves.map((move) => {
              if (!move) {
                return null; // Skip rendering if move is undefined
              }
              return (
                <React.Fragment key={move.id}>
                  <tr>
                    <td>{move.type}</td>
                    <td>{move.name}</td>
                    <td>{move.accuracy}</td>
                    <td>{move.class}</td>
                    <td>{move.power}</td>
                    <td>{move.pp}</td>
                  </tr>
                  <tr>
                    <td colSpan="6">
                      {move.effect}
                    </td>
                  </tr>
                </React.Fragment>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
