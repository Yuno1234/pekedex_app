import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li ><Link to="/search">Search</Link></li>
            <li><Link to="/pokemon">Pokemon</Link></li>
            <li><Link to="/compare">Compare</Link></li>
        </ul>
    </nav>
  )
}
