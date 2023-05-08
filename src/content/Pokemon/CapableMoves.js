import React from 'react'
import { useSelector } from 'react-redux'

export default function CapableMoves() {
  const selectedPokemon = useSelector(({ pokemon: { selectedPokemon } }) => selectedPokemon)

  return (
    <>
      <div>
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
    </>
  )
}
