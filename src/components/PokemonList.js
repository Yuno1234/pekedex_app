import React, {forwardRef} from 'react'
import PokemonCard from './PokemonCard';

const PokemonList = forwardRef(function PokemonList({ pokemons }, ref) {
  return (
    <div className='flex flex-wrap justify-center gap-8 max-w-screen-2xl'>
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