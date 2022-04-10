import React from 'react'

function Comprar() {
    return (
        <div className='bg-[url("/marbel.webp")] text-white flex flex-col items-center justify-center'>
            <h1 className=' font-bold tracking-tight leading-tight mt-12 mb-6 text-white text-5xl md:text-6xl xl:text-7xltext-center'>Cómo comprar</h1>

            <ul className='text-lg  text-white list-disc w-10/12' >

                <li className='pb-2'> <span className='font-bold tracking-tight leading-tight pt-6 mb-6 underline text-center text-red-600'>Importante:</span> El precio publicado corresponde a 1m2.</li>
                <li className='pb-2'>Si bien contamos con amplio stock en nuestro depósito, consulte  a un asesor comercial por medio de la mensajería, para confirmar que está disponible la mercadería que usted requiere.</li>
                <li className='pb-2'>En las publicaciones con stock de 1m2/1u. consultar con un asesor, ya que contamos con stock permanente de los productos publicados.</li>
                <li className='pb-2'>El horario de Atención es de lunes a viernes de 9 a 18.00hs y Sábados de 10 a 13.00hs.</li>
                <li className='pb-2'>Nuestro Asesor le informara las distintas formas de pagos disponibles que usted tiene a disposición y  así poder  llegar a la mejor opción de compra.</li>
                <li className='pb-2'>Medios de pagos: Transferencias, Link de Mercado Pago, Ahora 12 ( solo en el Showroom) , Efectivo ( consulte descuento).</li>
                <li className='pb-2'>En nuestro SHOWROOM de Parque Leloir, no se realizan entregas de compras realizadas.</li>
                <li className='pb-2'>Los productos con Stock confirmados, se pueden retirar de FORMA  INMEDIATA.</li>
                <li className='pb-2'>Los retiros de Mercadería se realizan en  nuestros depósitos ubicados en San Justo, La Matanza, de  lunes a viernes de 9 a 18 hs y sábados de 9 a 13.30 hs</li>
                <li className='pb-2'>Las entregas en obra es a  cargo del cliente, de 24 a 48/72 hs. hábiles una vez efectuada la compra (CABA, y Gran Buenos Aires)  siempre consulte con el asesor, para coordinar la entrega según su necesidad.</li>
                <li className='pb-2'>Cuando se recepciona  la mercadería en la obra , se deberá contar con personal para la descarga .</li>
                <li className='pb-2'>No realizamos envíos al interior del país, tampoco despachamos por ningún sistema de encomienda, transportes,  ni Mercado envíos. Si estas fuera del Área Metropolitana de Bs. As. (AMBA) tenes que contratar un expreso. </li>
            </ul>
            <p className=' text-6xl font-bold w-full text-right pr-4 pb-4'><span className='text-red-600 '>novo</span> Porcelanatos</p>
        </div>
    )
}

export default Comprar