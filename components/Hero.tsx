import React from 'react'
import Image from 'next/image'
import {  LazyMotion, domAnimation, m } from "framer-motion"
import Link from 'next/link'

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center lg:grid  lg:grid-cols-2 px-2 lg:py-12 sm:py-6 md:px-12 text-gray-800 text-center lg:text-left lg:gap-x-16 bg-[url("/marbel.webp")] bg-center min-h-screen relative '>

       <div className='mb-4'>
       <h1 className="leading-[3.3rem] mt-[-5rem] md:m-0  text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight lg:mb-12 text-white"><span className="text-red-600 text-6xl lg:text-9xl">novo</span> <br />Porcelanatos <br /></h1>
        <a className="inline-block px-7 py-3 bg-red-600 text-white font-bold text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="https://walink.co/baa647" target='_blank' rel='noopener noreferrer' role="button">Consultar</a>
        <a className="inline-block px-7 py-3 bg-white text-red-600 font-medium text-sm leading-snug uppercase rounded hover:text-red-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out m-2" data-mdb-ripple="true" data-mdb-ripple-color="light" href="https://novoporcelanatos468381923.mercadoshops.com.ar" target='_blank' rel='noopener noreferrer'  role="button">Tienda online</a>
        <Link href="/Comprar" passHref><span className="inline-block px-7 py-3  bg-white text-red-600 font-medium text-sm leading-snug uppercase rounded hover:text-red-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out hover:cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="light"  >Cómo comprar</span></Link>
       </div>
       
       <div>
       <LazyMotion features={domAnimation}>
    <m.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .2 }}>
       <a href='https://novoporcelanatos468381923.mercadoshops.com.ar/' target="_blank" rel='noopener noreferrer'>
        <Image
          src="/construccion.jpeg"
          className="w-full rounded shadow-lg "
          alt="Showroom de novo porcelanatos"
          width={650}
          height={450}
        />
      </a>
      </m.div>
</LazyMotion>
       </div>

       <div className="dual-btn-container w-11/12 lg:w-3/4 mx-auto lg:col-span-2 lg:grid lg:place-items-center">
  <a href="https://walink.co/baa647" target="_blank" rel="noopener noreferrer" className="dual-color-btn shine-hope-anim bgbtn w-full uppercase font-bold text-red-600 text-xl lg:text-2xl"><span className='animate-pulse hover:animate-none'>Consultar por precios en efectivo</span></a>
</div>

    </div>
  )
}

export default Hero