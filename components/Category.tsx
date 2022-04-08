import Image from "next/image"

const callouts = [
    {
      name: 'Porcelanatos y más',
      description: 'Porcelanatos',
      imageSrc: '/porcelanato.jpg',
      imageAlt: 'Un porcelanato',
      href: 'https://ceramicasnet.mercadoshops.com.ar/listado/construccion-pisos-revestimientos/',
    },
    {
      name: 'Cerámicas  y más',
      description: 'Cerámicas',
      imageSrc: '/ceramica.jpg',
      imageAlt: 'Ceramica 30x45 Legno Nogal 1era Cortines Piso Madera',
      href: 'https://ceramicasnet.mercadoshops.com.ar/listado/construccion-banos-sanitarios/',
    },
    {
      name: 'Pegamentos y más',
      description: 'Pegamentos',
      imageSrc: '/pegamento.jpg',
      imageAlt: 'Pegamento construcción',
      href: 'https://ceramicasnet.mercadoshops.com.ar/listado/construccion-pisos-revestimientos/',
    },
    {
      name: 'Sanitarios  y más',
      description: 'Sanitarios',
      imageSrc: '/sanitarios.jpg',
      imageAlt: 'Sanitario',
      href: 'https://ceramicasnet.mercadoshops.com.ar/listado/construccion-banos-sanitarios/',
    },
    {
      name: 'Perfilería  y más',
      description: 'Perfilería',
      imageSrc: '/perfileria.jpg',
      imageAlt: 'Sanitario',
      href: 'https://ceramicasnet.mercadoshops.com.ar/listado/construccion-banos-sanitarios/',
    },
    {
      name: 'Más productos',
      description: 'Otros productos',
      imageSrc: '/otro.jpg',
      imageAlt: 'Sanitario',
      href: 'https://ceramicasnet.mercadoshops.com.ar/listado/construccion-banos-sanitarios/',
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
                      height={620}
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-white">
                    <a href={callout.href}>
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
  