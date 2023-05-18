import React from 'react'
import pokeball from "../assets/poke_ball_icon.svg"

export default function Loader() {
  return (
    <div className='w-screen h-full flex justify-center items-center absolute inset-0 -z-10'>
      <img className='max-w-xs animate-[spin_1.5s_linear_infinite]' src={pokeball} />
    </div>
    
  )
}
