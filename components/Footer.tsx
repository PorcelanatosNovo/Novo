import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Footer() {
  return (
    
<footer className="p-4 bg-black shadow md:px-6 md:py-8 ">
<div className="sm:flex sm:items-center sm:justify-between">
<a href="https://flowbite.com" className="flex items-center mb-4 sm:mb-0">
<Image src="/logo4.png" className="mr-3 h-8" alt=" Logo" width={50} height={30}/>
<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><span className='text-red-600'>novo</span> Porcelanatos</span>
</a>
<ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
<li>
<Link href="/" ><a className="mr-4 hover:underline md:mr-6 ">Inicio</a></Link>
</li>
<li>
<Link href="/About" ><a className="mr-4 hover:underline md:mr-6 ">Nosotros</a></Link>
</li>
<li>
<Link href="/Products" ><a className="mr-4 hover:underline md:mr-6 ">Productos</a></Link>
</li>
<li>
<Link href="/Contact" ><a className="mr-4 hover:underline md:mr-6 ">Contacto</a></Link>
</li>
<li>
<Link href="/Cambios" ><a className="mr-4 hover:underline md:mr-6 ">Políticas de cambio</a></Link>
</li>
</ul>
</div>
<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <span className="hover:underline">novo Porcelanatos™</span>. Todos los derechos reservados. Web creada por <a href='https://nextfolio-three.vercel.app' target='blank' rel="noopener noreferrer" className="hover:underline">LastLightbringer™</a>. 
</span>
</footer>

  )
}

export default Footer