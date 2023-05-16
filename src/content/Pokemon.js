import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import Loader from '../components/Loader';
import { getPokemonData } from '../utils/getPokemonData';
import { pokemonTypes } from '../utils/pokemonTypes';
import axios from 'axios';
import { addToCompare, setSelectedPokemon } from '../app/slices/PokemonSlice';
import { pokemonTabs } from '../app/slices/AppSlice';
import Description from './Pokemon/Description';
import Evolution from './Pokemon/Evolution';
import CapableMoves from './Pokemon/CapableMoves';
import { getEffectiveness } from '../utils/getEffectiveness';

export default function Pokemon() {
  const params = useParams();
  const dispatch = useDispatch();
  const selectedPokemon = useSelector(({ pokemon: { selectedPokemon } }) => selectedPokemon)
  const currentPokemonTab = useSelector(({ app: { currentPokemonTab } }) => currentPokemonTab);
  const navigate = useNavigate()
  const [isDataLoading, setIsDataLoading] = useState(true)
  const randomNum = Math.floor(Math.random() * 1009) + 1
  

  const getRecursiveEvolution = useCallback(
    (evolutionChain, level, evolutionData) => {
      if (!evolutionChain.evolves_to.length) {
        return evolutionData.push({
          pokemon: {
            ...evolutionChain.species,
            url: evolutionChain.species.url.replace("pokemon-species", "pokemon"),
          },
          level,
        });
      }
      evolutionData.push({
        pokemon: {
          ...evolutionChain.species,
          url: evolutionChain.species.url.replace("pokemon-species", "pokemon"),
        },
        level,
      });
      return getRecursiveEvolution(
        evolutionChain.evolves_to[0],
        level + 1,
        evolutionData
      );
    },
    []
  );

  const getEvolutionData = useCallback(
    async(evolutionChain) => {
      const evolutionsUrl = [];
      const evolutionsData = [];
      getRecursiveEvolution(evolutionChain, 1, evolutionsUrl);
      try {
        for await (const pokemon of evolutionsUrl) {
          const { data } = await axios.get(pokemon.pokemon.url)
          const typeNames = data.types.map(type => type.type.name)
          evolutionsData.push({
            pokemon: {
              id: data.id,
              name: data.name,
              types: typeNames,
              sprite: data.sprites["other"]["official-artwork"]["front_default"]
            },
            level: pokemon.level
          })
        }
        return evolutionsData;
      } catch (err) {
        console.error(err)
      }
    },
    [getRecursiveEvolution]
  );

  const getMovesData = useCallback(
    async (url) => {
      const { data } = await axios.get(url)
      return {
        id: data.id,
        name: data.name,
        accuracy: data.accuracy,
        class: data.damage_class.name,
        power: data.power,
        pp: data.pp,
        effect: data.effect_entries.length > 0 ? data.effect_entries[0].short_effect : '',
        type: data.type.name,
      }
    },
    [selectedPokemon]
  )

  const setPokemonData = useCallback(
    async () => {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)

      const abilities = data.abilities.map(({ ability }) => ability.name);
      const moves = await Promise.all(
        data.moves.map(({ move }) => getMovesData(move.url))
      );

      const {
        data: {
          evolution_chain: { url: evolutionURL },
        },
      } = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${params.id}`);
      const { data: evolutionsUrl } = await axios.get(evolutionURL);
      const evolution = await getEvolutionData(evolutionsUrl.chain);
      
      let evolutionLevel;
      evolutionLevel = evolution.find(({ pokemon }) => pokemon.name === data.name).level;
      
      dispatch(
        setSelectedPokemon({
          id: params.id,
          name: data.name,
          types: data.types.map(type => type.type.name),
          sprite: data.sprites["other"]["official-artwork"]["front_default"],
          height: data.height,
          weight: data.weight,
          stats: data.stats.map(stat => stat.base_stat),
          abilities,
          moves,
          evolutionLevel,
          evolution,
          effectiveness: getEffectiveness(data.types.map(type => type.type.name))
        })
      );
      setIsDataLoading(false)
    },
    [params.id, getEvolutionData, dispatch]
  )

  function handleAddToCompare(id) {
    getPokemonData(id).then((data) => {
      dispatch(addToCompare(data))
    })
  }

  useEffect(() => {
    setPokemonData()
    console.log(selectedPokemon)
  }, [params.id, dispatch])

  return (
    <>
      {!isDataLoading && selectedPokemon ? (
        <>
          <div className='flex gap-3 justify-end'>
            <button className='border-2 rounded-md' onClick={() => { navigate(`/pokemon/${parseInt(params.id) - 1}`); setIsDataLoading(true);}}>Prev</button>
            <button className='border-2 rounded-md' onClick={() => { navigate(`/pokemon/${parseInt(params.id) + 1}`); setIsDataLoading(true);}}>Next</button>
            <button className='border-2 rounded-md' onClick={() => { navigate(`/pokemon/${randomNum}`); setIsDataLoading(true);}}>Random</button>
            <button className='border-2 rounded-md' onClick={() => {handleAddToCompare(params.id)}}>Add to Compare</button>
          </div>
          {currentPokemonTab === pokemonTabs.description && <Description />}
          {currentPokemonTab === pokemonTabs.evolution && <Evolution />}
          {currentPokemonTab === pokemonTabs.moves && <CapableMoves />}
        </>
      ) : (
        <Loader />
      )}
      
    </>
  );
}