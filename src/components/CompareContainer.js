import React from 'react'
import Loader from './Loader'
import { pokemonTypes } from '../utils/pokemonTypes';
import StatusChart from './StatusChart'
import pokeicon from '../assets/pokeball-symbol.svg'

export default function CompareContainer({pokemon}) {
  return (
    <>
        {pokemon ? (
            <div>
                <div className='flex justify-center items-center'>
                    <img src={pokemon.sprite} alt="NO IMAGE" loading="lazy"  />
                    <img className='absolute -z-10 w-[450px]' src={pokeicon} />
                </div>
                <h1 className='text-3xl font-extrabold'>{pokemon.name.toUpperCase()}</h1>
                <div className='flex'>
                    <div className='w-1/2'>
                        <div className='flex flex-row gap-1'>
                            {pokemon.types.map((type) => {
                                return <img className='w-10' key={type} src={pokemonTypes[type].image} loading="lazy"/>
                            })}
                        </div>
                        <p>
                            <label className='font-bold'>Height:</label> {pokemon.height}<br/>
                            <label className='font-bold'>Weight:</label> {pokemon.weight}
                        </p>
                    </div>
                    <div className='w-1/2'>
                        {/* <p>
                            HP: {pokemon.stats[0]}<br/>
                            AT: {pokemon.stats[1]}<br/>
                            DF: {pokemon.stats[2]}<br/>
                            SA: {pokemon.stats[3]}<br/>
                            SD: {pokemon.stats[4]}<br/>
                            SP: {pokemon.stats[5]}<br/>
                        </p>     */}
                        <StatusChart stats={pokemon.stats} />
                    </div>
                </div>
                
            </div>
        ) : (
            <h2 className='text-2xl font-extrabold'>Select a Pokemon to Compare</h2>
        )} 
    </>
  )
}
