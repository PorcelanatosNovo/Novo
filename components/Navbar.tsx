/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import LinkP from './LinkP'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Inicio', href: '/', current: true },
  { name: 'Nosotros', href: '/About', current: false },
  { name: 'Productos', href: '/Products', current: false },
  { name: 'Contacto', href: '/Contact', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  return (
    <Disclosure as="nav" className="bg-black z-50 max-w-full">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Abrir menú principal</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" passHref ><span className=" lg:hidden h-8 w-auto text-white flex text-xl	items-center justify-center"> <span className='text-red-600 text-3xl	 '>novo</span> Porcelanatos<Image src="/logo4.png" className="mr-3 h-8" alt=" Logo" width={50} height={30}/></span></Link>
                 <Link  href="/" passHref><span className="hidden lg:block h-8 w-auto text-white hover:cursor-pointer"><Image src="/logo4.png" className="mr-3 h-8" alt=" Logo" width={50} height={30}/></span></Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <LinkP key={item.name}
                      href={item.href}>
                      <a
                      className={classNames(
                        item.current ? ' text-gray-300 ' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                      </LinkP>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               

                {/* Profile dropdown */}
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <LinkP  key={item.name} href={item.href}>
                <a
               
                  
                  className={classNames(
                    item.current ? ' text-gray-300' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
                </LinkP>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
