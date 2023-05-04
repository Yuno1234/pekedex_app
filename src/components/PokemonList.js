import React, {forwardRef} from 'react'
import PokemonCard from './PokemonCard';

const PokemonList = forwardRef(function PokemonList({ pokemons }, ref) {
  return (
    <div>
      {pokemons?.map((pokemon, index) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          ref={pokemons.length === index + 1 ? ref : null}
        />
      ))}
    </div>
  );
});

export default PokemonList