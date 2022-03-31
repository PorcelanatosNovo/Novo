import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Features from '../components/Features'
import SocialMedia from '../components/SocialMedia'
import Categories from '../components/Categories'
import Choose from '../components/Choose'

const Home: NextPage = () => {
  return (
    <div >
      <Hero />
      <Features />
      <Choose />
      <Categories />
      <SocialMedia />
    </div>
  )
}

export default Home
