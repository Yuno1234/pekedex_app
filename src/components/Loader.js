import React from 'react'
import pokeball from "../assets/poke_ball_icon.svg"

export default function Loader() {
  return (
    <div className='w-screen h-full flex justify-center items-center absolute inset-0'>
      <img className='max-w-xs animate-bounce' src={pokeball} />
    </div>
    
  )
}
