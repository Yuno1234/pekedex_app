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
      <div id={pokemon.id} ref={ref}>
        <span>{pokemon.id}</span>
        <img
          src={pokemon.sprite}
          onClick={() => {
            navigate(`/pokemon/${pokemon.id}`);
            dispatch(setPokemonTab(pokemonTabs.description));
          }}
          alt="NO IMAGE"
          loading="lazy"
          height="100"
        />
        {pokemon.types.map((type) => (
          <img key={type} src={pokemonTypes[type].image} loading="lazy" height="32" />
        ))}<br />
        <h3>{pokemon.name}</h3>
        <button onClick={() => handleAddToCompare(pokemon.id)}>Add to Compare</button>
      </div>
    );
});

export default PokemonCard