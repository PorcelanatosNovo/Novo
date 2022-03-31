import React from 'react'
import ContactBanner from '../components/ContactBanner'

function Contact() {
  return (
   <div className=' w-screen	'>
      <div className='max-w-[90%] m-auto'>
      <h1 className='text-5xl font-bold tracking-tight leading-tight my-12 '>Contacto</h1>
      <p className='text-lg font-semibold mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis eius vitae sit nobis neque quo, saepe voluptates id eaque eligendi. Possimus odit repellendus pariatur nemo tempora ratione excepturi asperiores molestiae?</p>
      <ContactBanner />
    </div>
   </div>
  )
}

export default Contact