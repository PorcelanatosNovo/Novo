import React from 'react'
import ContactBanner from '../components/ContactBanner'
import SocialMedia from '../components/SocialMedia'
import ContacForm from '../components/ContactForm'

function Contact() {
  return (
   <div className=' w-screen	bg-[url("/marbel.webp")]  text-white'>
      <div className='max-w-[90%] m-auto'> 
      <h1 className='text-5xl font-bold tracking-tight leading-tight pt-12 mb-12 text-center	 '>Contacto</h1>
      <p className='text-xl font-semibold mb-4 text-center'>Visitá nuestro showroom y no te pierdas las últimas novedades en nuestras redes sociales.</p>
      <ContactBanner />
      
      
    </div>
    <div className="bg-black">
    <h1 className='text-5xl font-bold tracking-tight leading-tight mt-12 text-center '>Contáctanos <span className='text-red-600'>hoy</span>!</h1>
    <p className='text-xl font-semibold mb-4 text-center'>Nos pondremos en contacto lo antes posible.</p>
    <ContacForm />
    </div>
    <SocialMedia />
   </div>
  )
}

export default Contact