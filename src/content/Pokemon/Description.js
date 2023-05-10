import React from 'react'
import { useSelector } from 'react-redux'
import { pokemonTypes } from '../../utils/pokemonTypes'

export default function Description() {
const selectedPokemon = useSelector(({ pokemon: { selectedPokemon } }) => selectedPokemon)

  return (
    <div className='flex text-lg font-medium w-screen items-center justify-center absolute inset-0 -z-10'>
        <div className='flex flex-col gap-5'>
            <div>
                <h2 className='text-2xl font-bold'>#{selectedPokemon.id}</h2>
                <h1 className='text-5xl font-extrabold'>{selectedPokemon.name.toUpperCase()}</h1>
            </div>
            <div className='flex flex-row gap-1'>
                {selectedPokemon.types.map((type) => {
                    return <img className='w-10' key={type} src={pokemonTypes[type].image} loading="lazy"/>
                })}
            </div>
            <p>
                <label className='font-bold'>Height:</label> {selectedPokemon.height}<br />
                <label className='font-bold'>Weight:</label> {selectedPokemon.weight}
            </p>
        </div>
        <div className='w-5/12'>
            <img className='w-full' src={selectedPokemon.sprite} alt="NO IMAGE" loading="lazy" />
        </div>
        <div className='flex flex-col gap-8 justify-center items'>
            <div>
                <p>
                    <label className='font-bold'>HP:</label> {selectedPokemon.stats[0]}<br />
                    <label className='font-bold'>AT:</label> {selectedPokemon.stats[1]}<br />
                    <label className='font-bold'>DF:</label> {selectedPokemon.stats[2]}<br />
                    <label className='font-bold'>SA:</label> {selectedPokemon.stats[3]}<br />
                    <label className='font-bold'>SD:</label> {selectedPokemon.stats[4]}<br />
                    <label className='font-bold'>SP:</label> {selectedPokemon.stats[5]}<br />
                </p>
            </div>
            <div>
                {Object.entries(selectedPokemon.effectiveness).map(([effect, types]) => {
                    return <div className='flex items-center gap-1 font-bold' key={effect}>
                        x{effect} : {types.map((type) => {return <img className='w-10' key={type} src={pokemonTypes[type].image} loading="lazy"/>})}
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}
