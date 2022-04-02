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
      name: 'Porcelanatos',
      description: 'Pisos y porcelanatos',
      imageSrc: '/porcelanato.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Griferías',
      description: 'Griferías y accesorios',
      imageSrc: '/griferia.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Sanitarios y más',
      description: 'Sanitarios y más',
      imageSrc: '/sanitarios.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  
  export default function Categories() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-14 lg:py-12 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-gray-900">Categorías destacadas</h2>
  
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <Image
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"
                      width={300}
                      height={250}
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
  