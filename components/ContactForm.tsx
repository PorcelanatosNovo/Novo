//@ts-nocheck
import { useState } from 'react'

export default function ContacForm() {
	const [inputs, setInputs] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	})

	const [form, setForm] = useState('')

	const handleChange = (e) => {
		setInputs((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}))
	}

	const onSubmitForm = async (e) => {
		e.preventDefault()

		if (inputs.name && inputs.email  && inputs.phone && inputs.message) {
			setForm({ state: 'loading' })
			try {
				const res = await fetch(`api/contact`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(inputs),
				})

				const { error } = await res.json()

				if (error) {
					setForm({
						state: 'error',
						message: error,
					})
					return
				}

				setForm({
					state: 'success',
					message: 'Su mensaje ha sido enviado exitosamente.',
				})
				setInputs({
					name: '',
					email: '',
					phone: '',
					message: '',
				})
			} catch (error) {
				setForm({
					state: 'error',
					message: 'Algo salió mal. Intente nuevamente.',
				})
			}
		}
	}
	return (
		<div className='flex justify-start items-center flex-col '>
			<form className='h-full flex justify-center items-center form-group mb-6 border floating hover:floating-hv duration-300 focus-within:floating-hv border-solid border-black rounded-lg shadow-lg w-10/12 lg:w-4/6 p-4 flex-col bg-white text-black' onSubmit={(e) => onSubmitForm(e)}>

   				 	<div className="relative z-0 w-full mb-6 group">
       					 <input type="text" value={inputs.name} onChange={handleChange} name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        					<label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
    				</div>
				
				<div className="relative z-0 w-full mb-6 group">
      				<input type="email" value={inputs.email} onChange={handleChange} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      					<label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dirección de correo</label>
     			</div>

				  <div className="relative z-0 w-full mb-6 group">
        				<input type="tel" pattern="[0-9]+" id='phone' value={inputs.phone} onChange={handleChange}  name="phone"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        					<label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Número de celular (11-1111-1111)</label>
    			  </div>

				  <label htmlFor="message" className='text-lg font-semibold'>Tu mensaje</label>
				<textarea
					id='message'
					type='text'
					value={inputs.message}
					onChange={handleChange}
					className='form-control block
					w-full
					px-3
					py-1.5
					text-base
					font-normal
					text-gray-700
					bg-white bg-clip-padding
					border border-solid border-gray-300
					rounded
					transition
					ease-in-out
					m-2 
					focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
					placeholder='Consulta'
					rows='3'
					required
				/>
				<input type='submit' className='py-2.5 px-5 mr-2 mb-2 cursor-pointer focus:outline-none bg-white rounded-lg border hover:border-black border-gray-300  focus:z-10 focus:ring-4 focus:ring-gray-200 whitespace-nowrap' />
				{form.state === 'loading' ? (
					<div className='break-normal'>Enviando....</div>
				) : form.state === 'error' ? (
					<div>{form.message}</div>
				) : (
					form.state === 'success' && <div className='text-green-600 text-xl lg:w-11/12 text-center'>Su consulta ha sido enviada exitosamente, pronto nos contactaremos con usted.</div>
				)}
			</form>
		</div>
	)
}