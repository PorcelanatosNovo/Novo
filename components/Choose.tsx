import React from 'react'
import Image from 'next/image'

function Choose() {
  return (
    <section className="pt-16 text-gray-800 bg-black">
    <div className="block rounded-lg shadow-lg">
      <div className="flex flex-wrap items-center">
        <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12 p-2 ">
          <Image src="/novo.webp" alt="Entrade de la tienda"
          width={400}
          height={350}
            className="w-full max-h-[100rem] rounded bg-white " />
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <a href="#" rel='noopener noreferrer' target='_blank'><h2 className="text-3xl font-bold mb-6 pb-2 text-white">Visita nuestra <span className='uppercase text-red-600'>Tienda Web</span></h2></a>
            <p className="text-white mb-6 pb-2">
              Comprá y consulta desde la comodidad de tu casa, en un solo click.
            </p>
            <div className="flex flex-wrap mb-6">
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center text-white">
                  <svg className="w-4 h-4 mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Soporte 24/7
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center text-white">
                  <svg className="w-4 h-4 mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Asesoramiento personalizado
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center text-white">
                  <svg className="w-4 h-4 mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Productos
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center text-white">
                  <svg className="w-4 h-4 mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Precios 100% competitivos.
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center text-white">
                  <svg className="w-4 h-4 mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Garantía
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center text-white">
                  <svg className="w-4 h-4 mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Stock permanente
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center text-white">
                  <svg className="w-4 h-4 mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Rapidez
                </p>
              </div>
            </div>
            <a href='https://ceramicasnet.mercadoshops.com.ar' target='_blank' rel='noopener noreferrer'
              className="inline-block px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
              data-mdb-ripple="true" data-mdb-ripple-color="light">
              TIENDA WEB
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Choose