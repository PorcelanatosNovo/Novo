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
const callouts = [
    {
      name: 'Porcelanatos y más',
      description: 'Porcelanatos',
      imageSrc: './porcelanato.jpg',
      imageAlt: 'Un porcelanato',
      href: 'https://ceramicasnet.mercadoshops.com.ar/listado/construccion-pisos-revestimientos/',
    },
    {
      name: 'Cerámicas  y más',
      description: 'Cerámicas',
      imageSrc: './ceramica.jpg',
      imageAlt: 'Ceramica 30x45 Legno Nogal 1era Cortines Piso Madera',
      href: 'https://ceramicasnet.mercadoshops.com.ar/listado/construccion-banos-sanitarios/',
    },
    {
      name: 'Sanitarios  y más',
      description: 'Sanitarios',
      imageSrc: '/sanitarios.jpg',
      imageAlt: 'Sanitario',
      href: 'https://ceramicasnet.mercadoshops.com.ar/listado/construccion-banos-sanitarios/',
    }
  ]
  
  export default function Category() {
    return (
      <div className="bg-white mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-3 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-gray-900">Nuestras categorías</h2>
  
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  