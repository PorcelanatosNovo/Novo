import React from 'react'
import Us from '../components/Us'
import Buttons from '../components/helpers/Buttons'
import NextCarousel from '../components/NextCarousel'

function About() {
  return (
    <div className='flex justify-center align-center flex-col	text-center	bg-[url("/marbel.webp")] max-w-[100vw] w-full'>
      <h1 className='lg:text-8xl text-6xl font-bold tracking-tight leading-tight mt-12 mb-6 text-white max-w-full'><span className='text-red-600'>novo</span> Porcelanatos</h1>
      <Us />
      <NextCarousel />
    </div>
  )
}

export default About