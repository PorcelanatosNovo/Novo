import React from 'react'
import Image from 'next/image'
import {  LazyMotion, domAnimation, m } from "framer-motion"

function Choose() {
  return (
    <section className="pt-16 text-gray-800 bg-black">
    <div className="block rounded-lg shadow-lg">
      <div className="flex flex-wrap items-center lg:grid lg:grid-cols-2	">
      <LazyMotion features={domAnimation}>
    <m.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .2 }}>
        <a href='https://novoporcelanatos468381923.mercadoshops.com.ar' target="_blank" rel='noopener noreferrer' className="block w-full  p-2 ">
          <Image src="/novo.webp" alt="Entrada de la tienda"
          width={600}
          height={350}
            className="w-full max-h-[100rem] rounded bg-white " />
        </a>
        </m.div>
</LazyMotion>
<LazyMotion features={domAnimation}>
    <m.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .2 }}>
        <div className="w-full">
          <div className="mx-6 my-12 md:mx-12 bg-white p-4 rounded-lg">
            <a href="https://novoporcelanatos468381923.mercadoshops.com.ar" rel='noopener noreferrer' target='_blank'><h2 className="text-3xl font-bold mb-6 pb-2 text-black">Visita nuestra <span className='uppercase text-red-600 font-bold underline'>Tienda Web</span></h2></a>
            <p className="text-black mb-6 pb-2 font-semibold">
              Comprá y consulta desde la comodidad de tu casa, en un solo click.
            </p>
            <div className="flex flex-wrap mb-6 font-serif">
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center text-black">
                  <svg className="w-4 h-4 mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Soporte 24/7.
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center text-black">
                  <svg className="w-4 h-4 mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Asesoramiento personalizado.
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center text-black">
                  <svg className="w-4 h-4 mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Productos.
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center text-black">
                  <svg className="w-4 h-4 mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Precios 100% competitivos.
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center text-black">
                  <svg className="w-4 h-4 mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Garantía.
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center text-black">
                  <svg className="w-4 h-4 mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Stock permanente.
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center text-black">
                  <svg className="w-4 h-4 mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Rapidez.
                </p>
              </div>
            </div>
            <a href='https://novoporcelanatos468381923.mercadoshops.com.ar' target='_blank' rel='noopener noreferrer'
              className="inline-block px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
              data-mdb-ripple="true" data-mdb-ripple-color="light">
              TIENDA WEB
            </a>
          </div>
        </div>
        </m.div>
</LazyMotion>
      </div>
    </div>
  </section>
  )
}

export default Choose