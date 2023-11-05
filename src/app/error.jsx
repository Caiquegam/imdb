'use client'

import React from 'react'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div className='text-center mt-10'>
      <h1>Algo deu errado!</h1>
      <button className="hover:text-blue-700" onClick={() => reset()}>Tente novamente</button>
    </div>
  )
}
