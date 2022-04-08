import React from 'react'
import Image from 'next/image'
import {MailIcon} from '@heroicons/react/outline'

function SocialMedia() {
  return (
    <section className=" text-white text-center bg-[url('/marbel.webp')]">
    <div className="p-12">
      <h2 className="text-5xl font-bold tracking-tight leading-tight my-12">
       Estemos en contacto <br />
        <span className="text-red-600">Únete a nuestras redes sociales</span>
      </h2>
      <div className="flex flex-wrap justify-center md:space-x-2">
      

        {/* <!-- eshop --> */}
        <a href='https://ceramicasnet.mercadoshops.com.ar/' target='_blank' rel='noopener noreferrer' data-mdb-ripple="true" data-mdb-ripple-color="light"
          className="bg-sky-400 hover:bg-sky-500 m-2 py-2.5 px-6 mb-2 text-white font-semibold	 text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
          >
          <Image 
          src="/store.png"
          alt="Picture of the author"
          width={20}
          height={20}
          />
          E-shop
        </a>

        {/* <!-- Google --> */}
        <a  target='_blank' rel='noopener noreferrer' href='mailto:novoporcelanatos2019@gmail.com' data-mdb-ripple="true" data-mdb-ripple-color="light"
          className="font-semibold	 bg-red-700 hover:bg-red-800 m-2 py-2.5 px-6 mb-2 text-white text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
          >
          <MailIcon   className='block h-4 w-4'/>
          Mail
        </a>

        {/* <!-- Instagram --> */}
        <a href='https://www.instagram.com/novoleloir/' target='_blank' rel='noopener noreferrer' data-mdb-ripple="true" data-mdb-ripple-color="light"
          className="bg-rose-700 hover:bg-rose-800 m-2 py-2.5 px-6 mb-2 text-white font-semibold	 text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
         >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 mr-2">
            <path fill="currentColor"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
          Instagram
        </a>
      </div>
    </div>
  </section>
  )
}

export default SocialMedia