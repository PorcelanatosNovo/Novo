import React from 'react'
import Image from 'next/image'
import {  LazyMotion, domAnimation, m } from "framer-motion"

function Us() {
  return (
    <section className=" text-gray-800 ">
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
          <h2 className="text-5xl font-bold mb-6 ">Somos <span className="text-red-600 text-6xl">novo</span> Porcelanatos</h2>
            <p className="text-black mb-6 pb-2 font-semibold">
            Somos empresa lider en venta mayorista y minorista, con más de 25 años de experiencia en el rubro. Contamos con un showroom el cual brinda un punto de encuentro entre aquellos interesados en darle nueva vida a su hogar y nuestros profesionales. Para una mejor experiencia, contamos con stock permanente para que siempre puedas retirar lo que querés en 48/72hs.
            </p>
            <div className="flex flex-wrap mb-6 font-serif text-left">
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center text-black font-semibold">
                  <svg className="w-4 h-4 min-h-[24px] min-w-[24px] mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>25 años de experiencia.
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center text-black font-semibold">
                  <svg className="w-4 h-4 min-h-[24px] min-w-[24px] mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Atención personalizada.
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center text-black font-semibold">
                  <svg className="w-4 h-4 min-h-[24px] min-w-[24px] mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Más de 200 productos en exhibición.
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center text-black font-semibold">
                  <svg className="w-4 h-4 min-h-[24px] min-w-[24px] mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Líderes del mercado.
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center text-black font-semibold">
                  <svg className="w-4 h-4 min-h-[24px] min-w-[24px] mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Ventas mayoristas.
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center text-black font-semibold">
                  <svg className="w-4 h-4 min-h-[24px] min-w-[24px] mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Precios competitivos.
                </p>
              </div>
      
            </div>
            
          </div>
        </div>
        </m.div>
</LazyMotion>
      </div>
    </div>
  </section>
  )
}

export default Us