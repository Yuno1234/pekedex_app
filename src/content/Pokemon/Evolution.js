import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PokemonCard from '../../components/PokemonCard'

export default function Evolution() {
    const selectedPokemon = useSelector(({ pokemon: { selectedPokemon } }) => selectedPokemon)
    const dispatch = useDispatch()

    return (
        <>
            <h2 className='text-2xl font-bold'>#{selectedPokemon.id}</h2>
            <h1 className='text-3xl font-extrabold'>{selectedPokemon.name.toUpperCase()}</h1>
            <div>{selectedPokemon.evolutionLevel}</div>
            <div className='flex justify-center gap-20 items-center absolute inset-0 -z-10'>
                {selectedPokemon.evolution?.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.pokemon.id}
                        pokemon={pokemon.pokemon}
                    />
                ))}
            </div>
        </>
    )
}
