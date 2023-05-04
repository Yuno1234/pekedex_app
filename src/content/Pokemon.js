import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import Loader from '../components/Loader';
import { getPokemonData } from '../utils/getPokemonData';
import { pokemonTypes } from '../utils/pokemonTypes';
import axios from 'axios';
import { addToCompare, setSelectedPokemon } from '../app/slices/PokemonSlice';
import { pokemonTabs } from '../app/slices/AppSlice';
import PokemonNav from '../components/PokemonNav';
import Description from './Pokemon/Description';
import Evolution from './Pokemon/Evolution';
import CapableMoves from './Pokemon/CapableMoves';

export default function Pokemon() {
  const params = useParams();
  const dispatch = useDispatch();
  const selectedPokemon = useSelector(({ pokemon: { selectedPokemon } }) => selectedPokemon)
  const currentPokemonTab = useSelector(({ app: { currentPokemonTab } }) => currentPokemonTab);
  const navigate = useNavigate()
  const [isDataLoading, setIsDataLoading] = useState(true)
  

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
    (evolutionChain) => {
      const evolutionData = [];
      getRecursiveEvolution(evolutionChain, 1, evolutionData);
      return evolutionData;
    },
    [getRecursiveEvolution]
  );

  const getMovesData = useCallback(
    async (url) => {
      const { data } = await axios.get(url)

      return {
        name: data.name,
        accuracy: data.accuracy,
        damageType: data.damage_class.physical,
        power: data.power,
        pp: data.pp,
      }
    },
    []
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
      const { data: evolutionData } = await axios.get(evolutionURL);
      const evolution = getEvolutionData(evolutionData.chain);

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
          evolution
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
  }, [params.id, dispatch])

  return (
    <>
      {!isDataLoading && selectedPokemon ? (
        <>
          <PokemonNav />
          <button onClick={() => { navigate(`/pokemon/${parseInt(params.id) - 1}`) }}>Prev</button>
          <button onClick={() => { navigate(`/pokemon/${parseInt(params.id) + 1}`) }}>Next</button>
          <button onClick={() => {handleAddToCompare(params.id)}}>Add to Compare</button>
          <h1>{selectedPokemon.name}</h1>
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

{/* {selectedPokemon ? (
        <>

          <button onClick={() => { navigate(`/pokemon/${parseInt(params.id) - 1}`) }}>Prev</button>
          <button onClick={() => { navigate(`/pokemon/${parseInt(params.id) + 1}`) }}>Next</button>
          <button onClick={() => {handleAddToCompare(params.id)}}>Add to Compare</button>
          <h1>{selectedPokemon.name}</h1>
          <p>
            types: {selectedPokemon.types.map((type) => {
              return <img key={type} src={pokemonTypes[type].image} loading="lazy" height="64" />
            })}<br />
            height: {selectedPokemon.height}<br />
            weight: {selectedPokemon.weight}
          </p>
          <img src={selectedPokemon.sprite} alt="NO IMAGE" loading="lazy" height="500" />
          <p>
            HP: {selectedPokemon.stats[0]}<br />
            AT: {selectedPokemon.stats[1]}<br />
            DF: {selectedPokemon.stats[2]}<br />
            SA: {selectedPokemon.stats[3]}<br />
            SD: {selectedPokemon.stats[4]}<br />
            SP: {selectedPokemon.stats[5]}<br />
          </p>
          <div>{selectedPokemon.evolutionLevel}</div>
          {selectedPokemon.moves && selectedPokemon.moves.map((move) => {
            return <div key={move}>{move}</div>
          })}
        </>
      ) : (
        <Loader />
      )} */}