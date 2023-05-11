import React, {forwardRef} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pokemonTypes } from '../utils/pokemonTypes';
import { setPokemonTab } from '../app/slices/AppSlice';
import { pokemonTabs } from '../app/slices/AppSlice';
import { addToCompare } from '../app/slices/PokemonSlice';
import { getPokemonData } from '../utils/getPokemonData';

const PokemonCard = forwardRef(function PokemonCard({ pokemon }, ref) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleAddToCompare = (id) => {
        getPokemonData(id).then((data) => {
            dispatch(addToCompare(data));
        });
    };

    return (
      <div id={pokemon.id} ref={ref} className='flex flex-col gap-1 items-center w-52 h-60 border rounded-xl px-3 py-1' >
        <div className='flex justify-between w-full'>
            <span className='font-bold '>{pokemon.id}</span>
            <button onClick={() => handleAddToCompare(pokemon.id)}>Compare</button>
        </div>
        <h3 className='text-xl font-bold'>{pokemon.name.toUpperCase()}</h3>
        <img
          src={pokemon.sprite}
          onClick={() => {
            navigate(`/pokemon/${pokemon.id}`);
            dispatch(setPokemonTab(pokemonTabs.description));
          }}
          alt="NO IMAGE"
          loading="lazy"
          className='w-32'
        />
        <div className='flex flex-row gap-2'>
            {pokemon.types.map((type) => (
                <img className='w-8' key={type} src={pokemonTypes[type].image} loading="lazy" />
            ))}
        </div>
      </div>
    );
});

export default PokemonCard