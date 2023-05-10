import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import PokemonNav from './PokemonNav';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className='max-w-full text-xl font-bold sticky top-0 bg-white/95 drop-shadow-md'>
        <ul className='flex justify-center'>
            <li className='px-14 py-4'><Link className='' to="/search">Search</Link></li>
            <li className='px-14 py-4'><Link to="/pokemon">Pokemon</Link></li>
            <li className='px-14 py-4'><Link to="/compare">Compare</Link></li>
        </ul>
        {location.pathname.includes("/pokemon") && (
          <PokemonNav/>
        )}
    </nav>
  )
}
