import './App.css';
import react, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import axios from 'axios'


function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=100").then(res => {
      setPokemon(res.data.results.map(p => p.name))
      console.log(res.data.results)
    })
  }, [])
  

  return (
    <PokemonList pokemon={pokemon}/>
  );
}

export default App;
