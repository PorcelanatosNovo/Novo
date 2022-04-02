import React from 'react'
import Us from '../components/Us'
import Buttons from '../components/helpers/buttons'

function About() {
  return (
    <div className='flex justify-center align-center flex-col	text-center	'>
      <h1 className='text-5xl font-bold tracking-tight leading-tight mt-12 mb-6 '>nuevos <span className='text-red-600'>Porcelantos</span></h1>
      <Us />
      <Buttons />
    </div>
  )
}

export default About