import React from 'react'
import Image from 'next/image'

function Us() {
  return (
    <section className="mb-8 text-white">
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
          <div className="px-6 py-12 md:px-12">
            <h2 className="text-3xl font-bold mb-6 ">Somos <span className='text-red-600'>novo</span> Porcelanatos</h2>
            <p className="text-white mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, possimus optio quae voluptates fuga fugiat eligendi architecto. Accusamus provident quas eveniet sunt sint quia cumque rem distinctio placeat. Nemo corrupti placeat omnis ab sapiente magni tempore eum porro, dicta eos a quasi ut deleniti neque in, harum quae sequi soluta. Corporis sequi vero saepe ipsam?
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-6">
              <div className="mb-6">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                    </path>
                  </svg>20 años de experiencia.
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
                  </svg>Más de 100 productos.
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
                  </svg>Presupuestos.
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