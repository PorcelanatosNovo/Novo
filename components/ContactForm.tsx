//@ts-nocheck
import { useState } from 'react'

export default function ContacForm() {
	const [inputs, setInputs] = useState({
		name: '',
		email: '',
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

		if (inputs.name && inputs.email && inputs.message) {
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
		<div className='flex justify-center items-center flex-col '>
			<form className='min-w-[75%] flex justify-center items-center form-group mb-6	 flex-col' onSubmit={(e) => onSubmitForm(e)}>
				<input
					id='name'
					type='text'
					value={inputs.name}
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
					m-2 max-w-[300px]
					focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
					placeholder='Nombre'
					required
				/>
				<input
					id='email'
					type='email'
					value={inputs.email}
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
					m-2 max-w-[300px]
					focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
					placeholder='Correo electrónico'
					required
				/>
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
				<input type='submit' className='w-full
              px-6
              py-2.5
              bg-blue-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
              transition
              duration-150
              ease-in-out
			  m-2 
			  cursor-pointer
			  ' 
			
			  />
				{form.state === 'loading' ? (
					<div>Enviando....</div>
				) : form.state === 'error' ? (
					<div>{form.message}</div>
				) : (
					form.state === 'success' && <div className='text-green-600 text-xl font-semibold mb-4 text-center'>Su consulta ha sido enviada exitosamente!Pronto nos contactaremos con usted.</div>
				)}
			</form>
		</div>
	)
}