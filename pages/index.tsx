import type { NextPage } from 'next'
import Heroe from '../components/Heroe'

import Categories from '../components/Categories'
import Choose from '../components/Choose'
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/SocialMedia'))
const DynamicComponent2 = dynamic(() => import('../components/Features'))

const Home: NextPage = () => {
  return (
    <div className='bg-black' >
      <Heroe />
      <DynamicComponent2 />
      <Choose />
      <Categories />
      <DynamicComponent />
    </div>
  )
}

export default Home
