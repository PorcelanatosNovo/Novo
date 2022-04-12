import React from 'react'
import { NextSeo } from 'next-seo';

function NextSEO() {
  return (
    <NextSeo
      title="novo Porcelanatos"
      description="Somos novo Porcelanatos, líderes en venta mayorista y minorista, con más de 25 años de experiencia en el rubro"
      canonical="https://www.novoporcelanatos.com"
      openGraph={{
        url: 'https://www.novoporcelanatos.com',
        title: 'novo Porcelanato',
        description: 'Somos novo Porcelanatos, líderes en venta mayorista y minorista, con más de 25 años de experiencia en el rubro',
        images: [
          {
            url: 'https://www.novoporcelanatos.com/_next/image?url=%2Fconstruccion.jpeg&w=750&q=75',
            width: 750,
            height: 460,
            alt: 'Frente del local novo Porcelanatos',
            type: 'image/webp',
          },
        ],
        site_name: 'novoPorcelanatos',
      }}
      
    />
  )
}

export default NextSEO