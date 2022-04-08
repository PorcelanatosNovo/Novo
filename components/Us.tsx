import React from 'react'
import Image from 'next/image'

function Us() {
  return (
    <section className="mb-8 text-white px-2">
    <div className="block rounded-lg shadow-lg bg-transparent ">
      <div className="flex flex-wrap items-center">
        <div className="grow-0 shrink-0 basis-auto  w-full lg:flex lg:w-6/12 xl:w-4/12 flex align-center justify-center pl-2">
          <Image src="/novo.webp" 
          alt="Nuestra sucursal"
          width={700}
          height={500}
            className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12 font-bold text-lg	">
            <h2 className="text-5xl font-bold mb-6  ">Somos <span className='text-red-600 text-6xl'>novo</span> Porcelanatos</h2>
            <p className="text-white mb-6 font-normal	">
            Somos empresa lider en venta mayorista y minorista, con más de 25 años de experiencia en el rubro. Contamos con un showroom el cual brinda un punto de encuentro entre aquellos interesados en darle nueva vida a su hogar y nuestros profesionales. Para una mejor experiencia, contamos con stock permanente para que siempre puedas retirar lo que querés en 48/72hs.
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-6">
              <div className="mb-6">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                    </path>
                  </svg>25 años de experiencia.
                </p>
              </div>

              <div className="mb-6">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                    </path>
                  </svg>Atención personalizada.
                </p>
              </div>

              <div className="mb-6">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                    </path>
                  </svg>Más de 200 productos en exhibición.
                </p>
              </div>
              <div className="mb-6">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                    </path>
                  </svg>Ventas mayoristas.
                </p>
              </div>

              <div className="mb-6">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                    </path>
                  </svg>Líderes del mercado.
                </p>
              </div>

              <div className="mb-6">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                    </path>
                  </svg>Precios competitivos.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Us