import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { pokemonTypes } from '../../utils/pokemonTypes'
import StatusChart from '../../components/StatusChart'
import pokeicon from '../../assets/pokeball-symbol.svg'

export default function Description() {
    const selectedPokemon = useSelector(({ pokemon: { selectedPokemon } }) => selectedPokemon)

    return (
        <div className={`flex text-lg font-medium w-screen items-center justify-center absolute inset-0 top-10 -z-10 bg-gradient-to-t from-[${pokemonTypes[selectedPokemon.types[Math.floor(Math.random() * selectedPokemon.types.length)]].color}] to-90% ...`}>
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
            <div className='w-5/12 flex justify-center items-center'>
                <img className='w-2/3' src={selectedPokemon.sprite} alt="NO IMAGE" loading="lazy" />
                <img className='absolute -z-10 w-1/3' src={pokeicon} />
            </div>
            <div className='flex flex-col gap-8 justify-center items'>
                <StatusChart stats={selectedPokemon.stats} />
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
// bg-gradient-to-t ${bgColor} ...