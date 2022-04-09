/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Image from "next/image"

const callouts = [
    {
      name: 'Porcelanatos y pisos',
      description: 'Porcelanatos',
      imageSrc: '/porcelanato.jpg',
      imageAlt: 'Muestra de porcelanatos.',
      href: 'https://novoporcelanatos468381923.mercadoshops.com.ar/listado/pisos-paredes-aberturas-porcelanatos/',
    },
    {
      name: 'Cerámicas y paredes',
      description: 'Cerámicas',
      imageSrc: '/ceramica.jpg',
      imageAlt: 'Imagen de una cerámica.',
      href: 'https://novoporcelanatos468381923.mercadoshops.com.ar/listado/pisos-paredes-aberturas-ceramicas//',
    },
    {
      name: 'Mezclas Adhesivas para Pisos',
      description: 'Adhesivos',
      imageSrc: '/adhesivos.jpg',
      imageAlt: 'Adheivos klaukol',
      href: 'https://novoporcelanatos468381923.mercadoshops.com.ar/listado/pisos-revestimientos-mezclas-adhesivas/',
    },
  ]
  
  export default function Categories() {
    return (
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-14 lg:py-6 lg:max-w-none">
            <h2 className="text-3xl font-bold mb-6 pb-2 text-white">Categorías destacadas</h2>
  
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80  rounded overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <Image
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"
                      width={400}
                      height={550}
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-white">
                    <a href={callout.href} target='_blank' rel="noopener noreferrer">
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-white">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  