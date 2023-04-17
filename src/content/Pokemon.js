import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import{ setSelectedPokemon } from "../app/slices/PokemonSlice";
import Loader from '../components/Loader';

export default function Pokemon() {
  const params = useParams();
  const dispatch = useDispatch();
  const selectedPokemon = useSelector(({pokemon: {selectedPokemon}}) =>  selectedPokemon)
  const navigate = useNavigate()

  const getPokemonData = useCallback(
    async() => {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)

      dispatch(
        setSelectedPokemon({
          id: params.id,
          name: data.name,
          types: data.types.map(type => type.type.name),
          sprite: data.sprites["other"]["official-artwork"]["front_default"],
          height: data.height,
          weight: data.weight,
          stats: data.stats.map(stat => stat.base_stat),
          abilities: data.abilities.map(ability => ability.ability.name)
        })
      );
    }, [params.id, dispatch]);

  useEffect(() => {
    getPokemonData()
    console.log(params, selectedPokemon)
  }, [params.id, getPokemonData])



  return (
    <>
      {selectedPokemon ? (
        <>
          <button onClick={() => {navigate(`/pokemon/${parseInt(params.id) - 1}`)}}>Prev</button>
          <button onClick={() => {navigate(`/pokemon/${parseInt(params.id) + 1}`)}}>Next</button>
          <h1>{selectedPokemon.name}</h1>
          <p>
            types: {selectedPokemon.types.map((type) => {
                return <span key={type}>{type} </span>
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
        </>
      ) : (
        <Loader />
      )}
  </>
  );
}
