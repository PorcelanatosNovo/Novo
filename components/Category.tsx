import Image from "next/image"

const callouts = [
    {
      name: 'Porcelanatos y más',
      description: 'Porcelanatos',
      imageSrc: '/porcelanato.webp',
      imageAlt: 'Un porcelanato',
      href: 'https://novoporcelanatos468381923.mercadoshops.com.ar/listado/pisos-paredes-aberturas-porcelanatos/',
    },
    {
      name: 'Cerámicas  y más',
      description: 'Cerámicas',
      imageSrc: '/ceramica.webp',
      imageAlt: 'Ceramica 30x45 Legno Nogal 1era Cortines Piso Madera',
      href: 'https://novoporcelanatos468381923.mercadoshops.com.ar/listado/pisos-paredes-aberturas-ceramicas/',
    },
    {
      name: 'Mezclas Adhesivas para Pisos',
      description: 'Pegamentos',
      imageSrc: '/adhesivos.webp',
      imageAlt: 'Pegamento construcción',
      href: 'https://novoporcelanatos468381923.mercadoshops.com.ar/listado/pisos-revestimientos-mezclas-adhesivas/',
    },
    {
      name: 'Sanitarios  y más',
      description: 'Sanitarios',
      imageSrc: '/sanitarios.webp',
      imageAlt: 'Sanitario',
      href: 'https://novoporcelanatos468381923.mercadoshops.com.ar/',
    },
    {
      name: 'Perfilería  y más',
      description: 'Perfilería',
      imageSrc: '/perfileria.webp',
      imageAlt: 'Imagen de perfilerías',
      href: 'https://novoporcelanatos468381923.mercadoshops.com.ar/',
    },
    {
      name: 'Más productos',
      description: 'Otros productos',
      imageSrc: '/otro.jpg',
      imageAlt: 'Una sala decorada con porcelanatos.',
      href: 'https://novoporcelanatos468381923.mercadoshops.com.ar/',
    }
  ]
  
  export default function Category() {
    return (
      <div className="bg-black p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto pb-16 pt-4 sm:py-24 lg:py-3 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-white uppercase">Nuestras categorías</h2>
  
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 m-4">
                  <Image
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"
                      width={600}
                      height={650}
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-white" >
                    <a href={callout.href} target="_blank" rel="noreferrer noopener">
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
  