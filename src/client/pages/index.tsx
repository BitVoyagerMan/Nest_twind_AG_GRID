import type { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<div className='flex flex-col place-content-center items-center h-screen'>
			<h1 className='font-bold text-xl'>Hello World!</h1>

			<p className='font-semibold'>This is the start of a great app</p>

			<p className='font-light'>From: Jeebe Diop</p>
		</div>
	)
}

export default Home
