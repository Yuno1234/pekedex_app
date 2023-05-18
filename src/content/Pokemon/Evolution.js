import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from '../../components/PokemonCard'
import { pokemonTypes } from '../../utils/pokemonTypes'

export default function Evolution() {
    const selectedPokemon = useSelector(({ pokemon: { selectedPokemon } }) => selectedPokemon)

    return (
        <div className={`flex flex-col justify-center items-center w-screen absolute inset-0 -z-10 bg-gradient-to-t from-[${pokemonTypes[selectedPokemon.types[Math.floor(Math.random() * selectedPokemon.types.length)]].color}] to-90% ...`}>
            <div className='flex flex-col gap-8'>
                <div className='mx-4'>
                    <h2 className='text-2xl font-bold'>#{selectedPokemon.id}</h2>
                    <h1 className='text-3xl font-extrabold'>{selectedPokemon.name.toUpperCase()}</h1>
                    <h3 className='text-xl font-bold'>Evolution Level {selectedPokemon.evolutionLevel}</h3>
                </div>
                <div className='flex gap-20 items-center'>   
                    {selectedPokemon.evolution?.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.pokemon.id}
                            pokemon={pokemon.pokemon}
                        />
                    ))}
                </div>
            </div> 
        </div>
    )
}
