import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import Loader from '../components/Loader';
import { setPokemonData } from '../app/reducers/setPokemonData';
import { pokemonTypes } from '../utils/pokemonTypes';
import axios from 'axios';
import { addPokemonDetail } from '../app/slices/PokemonSlice';


export default function Pokemon() {
  const params = useParams();
  const dispatch = useDispatch();
  const selectedPokemon = useSelector(({pokemon: {selectedPokemon}}) =>  selectedPokemon)
  const navigate = useNavigate()

  const getRecursiveEvolution = useCallback(
    (evolutionChain, level, evolutionData) => {
      if (!evolutionChain.evolves_to.length) {
        return evolutionData.push({
          pokemon: {
            ...evolutionChain.species,
            url: evolutionChain.species.url.replace(
              "pokemon-species",
              "pokemon"
            ),
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

  const getPokemonDetail = useCallback(
    async() => {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)

      const abilities = data.abilities.map(({ ability }) => ability.name);
      const moves = data.moves.map(({ move }) => move.name);

      const {
        data: {
          evolution_chain: { url: evolutionURL },
        },
      } = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${params.id}`);
      const { data: evolutionData } = await axios.get(evolutionURL);
      const evolution = getEvolutionData(evolutionData.chain);

      let evolutionLevel;
      evolutionLevel = evolution.find(({ pokemon }) => pokemon.name === data.name).level;

      return { abilities, moves, evolutionLevel, evolution };
    },
    [params.id, getEvolutionData]
  )

  useEffect(() => {
    dispatch(setPokemonData({id: params.id, stateName: "selected"}))
    getPokemonDetail().then((data) => {
      dispatch(addPokemonDetail(data))
    })
  }, [params.id, dispatch])

  return (
    <>
      {selectedPokemon ? (
        <>
          <button onClick={() => {navigate(`/pokemon/${parseInt(params.id) - 1}`)}}>Prev</button>
          <button onClick={() => {navigate(`/pokemon/${parseInt(params.id) + 1}`)}}>Next</button>
          <h1>{selectedPokemon.name}</h1>
          <p>
            types: {selectedPokemon.types.map((type) => {
                return <img key={type} src={pokemonTypes[type].image} loading="lazy" height="64" />
            })}<br/>
            height: {selectedPokemon.height}<br/>
            weight: {selectedPokemon.weight}
          </p>
          <img src={selectedPokemon.sprite} alt="NO IMAGE" loading="lazy" height="500" />
          <p>
            HP: {selectedPokemon.stats[0]}<br/>
            AT: {selectedPokemon.stats[1]}<br/>
            DF: {selectedPokemon.stats[2]}<br/>
            SA: {selectedPokemon.stats[3]}<br/>
            SD: {selectedPokemon.stats[4]}<br/>
            SP: {selectedPokemon.stats[5]}<br/>
          </p>
          <div>{selectedPokemon.evolutionLevel}</div>
          {selectedPokemon.moves && selectedPokemon.moves.map((move) => {
            return <div key={move}>{move}</div>
          })}
        </>
      ) : (
        <Loader />
      )}
  </>
  );
}
