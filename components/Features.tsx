import React from 'react'
import Featured from './Featured'
import BrandCarousel from './BrandCarousel'
import {  LazyMotion, domAnimation, m } from "framer-motion"

function Features() {
  return (
    <section className="text-gray-800 text-center p-4 bg-black">
<h2 className="text-4xl	 font-bold mb-20 uppercase text-red-600">Somos líderes del mercado</h2>
<BrandCarousel />
<LazyMotion features={domAnimation}>
    <m.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .2 }}>
<Featured />
</m.div>
</LazyMotion>
</section>

  )
}

export default Features