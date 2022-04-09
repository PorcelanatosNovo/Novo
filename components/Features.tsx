import React from 'react'
import Featured from './Featured'
import BrandCarousel from './BrandCarousel'

function Features() {
  return (
    <section className="text-gray-800 text-center p-4 bg-black">
<h2 className="text-4xl	 font-bold mb-20 uppercase text-red-600">Somos líderes del mercado</h2>
<BrandCarousel />
<Featured />
</section>
  )
}

export default Features