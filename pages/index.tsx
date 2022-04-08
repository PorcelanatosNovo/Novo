import type { NextPage } from 'next'
import Heroe from '../components/Heroe'
import Features from '../components/Features'
import SocialMedia from '../components/SocialMedia'
import Categories from '../components/Categories'
import Choose from '../components/Choose'

const Home: NextPage = () => {
  return (
    <div className='bg-black' >
      <Heroe />
      <Features />
      <Choose />
      <Categories />
      <SocialMedia />
    </div>
  )
}

export default Home
