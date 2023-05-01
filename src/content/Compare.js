import React, { useEffect } from 'react'
import CompareContainer from '../components/CompareContainer'
import { useSelector } from 'react-redux'
import { current } from "@reduxjs/toolkit";

export default function Compare() {
  const compareQueue = useSelector(({pokemon: {compareQueue}}) =>  compareQueue)

  return (
    <>
      <h1>Compare</h1>
      <CompareContainer
        pokemon={compareQueue[0]}
        isEmpty={compareQueue.length < 1}
      />
      <CompareContainer
        pokemon={compareQueue[1]}
        isEmpty={compareQueue.length < 2}
      />
    </>
    
  )
}
