import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link'
function Heroe(router:any) {
  return (
    <div className=' bg-[url("/marbel.webp")] flex flex-col items-center justify-center lg:grid lg:grid-cols-3	lg:grid-rows-1 px-6 lg:py-12 sm:py-6 md:px-12 text-gray-800 text-center lg:text-left lg:gap-x-16	min-h-screen lg:min-h-0'>
        <div className='lg:col-span-1 mt-12 lg:mt-0'>
        <h1 className="leading-[3.3rem] mt-[-9rem] md:m-0  text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 text-white"><span className="text-red-600 text-8xl	">novo</span> <br />Porcelanatos <br /></h1>
        <a className="inline-block px-7 py-3 bg-red-600 text-white font-bold text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="https://walink.co/baa647" target='_blank' rel='noopener noreferrer' role="button">Consultar</a>
        <a className="inline-block px-7 py-3 bg-white text-red-600 font-medium text-sm leading-snug uppercase rounded hover:text-red-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out m-2" data-mdb-ripple="true" data-mdb-ripple-color="light" href="https://novoporcelanatos468381923.mercadoshops.com.ar" target='_blank' rel='noopener noreferrer'  role="button">Tienda online</a>
        <Link href="/Comprar" passHref><span className="inline-block px-7 py-3 mt-4 bg-white text-red-600 font-medium text-sm leading-snug uppercase rounded hover:text-red-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out hover:cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="light"  >Cómo comprar</span></Link>
        </div>
        <div className='lg:col-span-2'>
        <motion.div
        className='mb-0 w-full p-4 lg:p-12'
      key={router.route}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          scale: 0,
        },
        animate: {
          scale: 1,
        },
      }}
      transition={{ duration: 0.3 }}
    >
      <a href='https://novoporcelanatos468381923.mercadoshops.com.ar/' target="_blank" rel='noopener noreferrer'>
        <Image
          src="/construccion.jpeg"
          className="w-full rounded shadow-lg "
          alt="Showroom de novo porcelanatos"
          width={650}
          height={450}
        />
      </a>
      </motion.div>
        </div>
    </div>
  )
}

export default Heroe