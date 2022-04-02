import React from 'react'
import Image from 'next/image'
import Productos from '../components/Productos'
import Category from '../components/Category'

function Products() {
  return (
  <div>
        <div className='flex items-center justify-center flex-col	'>
      <h1 className='text-5xl font-bold tracking-tight leading-tight mt-12 mb-6 '>Visita nuestra <a href="#" className='text-blue-600 uppercase hover:text-blue-700'>tienda online</a></h1>
      <p className='text-lg font-semibold mb-4'>Encontrá todos los productos en nuestro e-shop</p>
      <div className="buttons my-10">
          <a href="#" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Llamar</a>
          <a href='#' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Enviar Mensaje</a>
          <a href='#' className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xl px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
          Tienda online</a>

      </div>
       <a href="#" target='_blank' rel='noopener noreferrer'> 
        <Image 
          src="/banner.svg"
          alt="Picture of the author"
          width={600}
          height={300}
        />
        </a>
        </div>
        <Category />
  </div>
  )
}

export default Products