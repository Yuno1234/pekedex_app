import './App.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useCallback } from 'react'

const Search = lazy(() => import("./content/Search"));
const Pokemon = lazy(() => import("./content/Pokemon"));
const Compare = lazy(() => import("./content/Compare"));

function App() {
  const selectedPokemon = useSelector(({pokemon: {selectedPokemon}}) =>  selectedPokemon)
  const randomNum = Math.floor( Math.random() * 1009) + 1
  
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route path="/search" element={<Search />}/>
          <Route path="/pokemon">
            <Route index element={selectedPokemon ? <Navigate to={`/pokemon/${selectedPokemon.id}`}/> : <Navigate to={`/pokemon/${randomNum}`}/>}/>
            <Route path=":id" element={ <Pokemon />}/>
          </Route>
          <Route path="/compare" element={<Compare />}/>
          <Route path="*" element={<Navigate to="/search" />}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
    
  );
}

export default App;
