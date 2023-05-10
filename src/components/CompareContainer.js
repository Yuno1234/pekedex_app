import React from 'react'
import Loader from './Loader'
import { pokemonTypes } from '../utils/pokemonTypes';

export default function CompareContainer({pokemon}) {
  return (
    <>
        {pokemon ? (
            <div className=''>
                <img src={pokemon.sprite} alt="NO IMAGE" loading="lazy" height="500" />
                <h1 className='text-3xl font-extrabold'>{pokemon.name.toUpperCase()}</h1>
                <div className='flex'>
                    <div className='w-1/2'>
                        <p>
                            types: {pokemon.types.map((type) => {
                                return <img className='w-10' key={type} src={pokemonTypes[type].image} loading="lazy"/>
                            })}<br/>
                            height: {pokemon.height}<br/>
                            weight: {pokemon.weight}
                        </p>
                    </div>
                    <div className='w-1/2'>
                        <p>
                            HP: {pokemon.stats[0]}<br/>
                            AT: {pokemon.stats[1]}<br/>
                            DF: {pokemon.stats[2]}<br/>
                            SA: {pokemon.stats[3]}<br/>
                            SD: {pokemon.stats[4]}<br/>
                            SP: {pokemon.stats[5]}<br/>
                        </p>    
                    </div>
                </div>
                
            </div>
        ) : (
            <h2>Select a Pokemon to Compare</h2>
        )} 
    </>
  )
}
