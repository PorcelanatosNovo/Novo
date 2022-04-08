import React from 'react'
import Us from '../components/Us'
import Buttons from '../components/helpers/Buttons'

function About() {
  return (
    <div className='flex justify-center align-center flex-col	text-center	bg-[url("/marbel.webp")] '>
      <h1 className='text-5xl font-bold tracking-tight leading-tight mt-12 mb-6 text-white'><span className='text-red-600'>nuevos</span> Porcelanatos</h1>
      <Us />
      <Buttons />
    </div>
  )
}

export default About