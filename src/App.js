import './App.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Navbar from './components/Navbar';
import Loader from './components/Loader';

const Search = lazy(() => import("./content/Search"));
const Pokemon = lazy(() => import("./content/Pokemon"));
const Compare = lazy(() => import("./content/Compare"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route path="/search" element={<Search />}/>
          <Route path="/pokemon/:id" element={<Pokemon />}/>
          <Route path="/compare" element={<Compare />}/>
          <Route path="*" element={<Navigate to="/search" />}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
    
  );
}

export default App;
