import React from 'react'
import ContactBanner from '../components/ContactBanner'
import SocialMedia from '../components/SocialMedia'

function Contact() {
  return (
   <div className=' w-screen	'>
      <div className='max-w-[90%] m-auto'>
      <h1 className='text-5xl font-bold tracking-tight leading-tight my-12 text-center	 '>Contacto</h1>
      <p className='text-xl font-semibold mb-4 text-center'>Visitá nuestro showroom y no te pierdas las últimas novedades en nuestras redes sociales.</p>
      <ContactBanner />
    </div>
    <SocialMedia />
   </div>
  )
}

export default Contact