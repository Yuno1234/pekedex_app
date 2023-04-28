import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import Loader from '../components/Loader';
import { setPokemonData } from '../app/reducers/setPokemonData';
import { pokemonTypes } from '../utils/pokemonTypes';

export default function Pokemon() {
  const params = useParams();
  const dispatch = useDispatch();
  const selectedPokemon = useSelector(({pokemon: {selectedPokemon}}) =>  selectedPokemon)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(setPokemonData({id: params.id, stateName: "selected"}))
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
        </>
      ) : (
        <Loader />
      )}
  </>
  );
}
