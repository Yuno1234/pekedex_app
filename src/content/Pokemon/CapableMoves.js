import React from 'react'
import { useSelector } from 'react-redux'
import { pokemonTypes } from '../../utils/pokemonTypes'

export default function CapableMoves() {
  const selectedPokemon = useSelector(({ pokemon: { selectedPokemon } }) => selectedPokemon)

  return (
    <div className={`flex justify-center`}>
      <div className={`fixed inset-0 top-10 -z-10 bg-gradient-to-t from-[${pokemonTypes[selectedPokemon.types[Math.floor(Math.random() * selectedPokemon.types.length)]].color}] to-90% ...`}></div>
      <div className='m-8  max-w-screen-md'>
        <div className='mx-4 my-6'>
          <h2 className='text-2xl font-bold'>#{selectedPokemon.id}</h2>
          <h1 className='text-3xl font-extrabold'>{selectedPokemon.name.toUpperCase()}</h1>
        </div>
        <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
          <table className='w-full table-auto'>
            <thead >
              <tr className='bg-slate-600 text-white'>
                <th className="px-6 py-3 text-left">Type</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Accuracy</th>
                <th className="px-6 py-3 text-left">Class</th>
                <th className="px-6 py-3 text-left">Power</th>
                <th className="px-6 py-3 text-left">PP</th>
              </tr>
            </thead>
            <tbody>
              {selectedPokemon.moves && selectedPokemon.moves.map((move) => {
                if (!move) {
                  return null; // Skip rendering if move is undefined
                }
                return (
                  <React.Fragment key={move.id}>
                    <tr className='bg-white'>
                      <td className="px-6 py-2 text-left text-xs font-medium text-base">{move.type}</td>
                      <td className="px-6 py-2 text-left text-xs font-medium text-base">{move.accuracy}</td>
                      <td className="px-6 py-2 text-left text-xs font-medium text-base">{move.name}</td>
                      <td className="px-6 py-2 text-left text-xs font-medium text-base">{move.class}</td>
                      <td className="px-6 py-2 text-left text-xs font-medium text-base">{move.power}</td>
                      <td className="px-6 py-2 text-left text-xs font-medium text-base">{move.pp}</td>
                    </tr>
                    <tr className='bg-slate-100'>
                      <td colSpan="6" className="px-6 py-2 text-left text-xs font-medium text-base">
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
    </div>
  )
}
