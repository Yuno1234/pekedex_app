import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { pokemonTabs } from '../app/slices/AppSlice';
import { setPokemonTab } from '../app/slices/AppSlice';


export default function PokemonNav() {
    const dispatch = useDispatch();
    const currentPokemonTab = useSelector(({ app: { currentPokemonTab } }) => currentPokemonTab);

    const routes = [
        {
          name: pokemonTabs.description,
          value: "Description",
        },
        {
          name: pokemonTabs.evolution,
          value: "Evolution",
        },
        {
          name: pokemonTabs.moves,
          value: "Capable Moves",
        },
      ];

  return (
    
    <ul className='flex justify-evenly max-w-full text-xl font-bold'>
        {routes.map((route) => (
          <li
            key={route.name}
            className={`${
              currentPokemonTab === route.name ? "active" : ""
            } cursor-pointer py-3`}
            onClick={() => dispatch(setPokemonTab(route.name))}
          >
            {route.value}
          </li>
        ))}
    </ul>

  )
}
