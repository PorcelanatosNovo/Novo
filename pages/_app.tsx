import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import MetaHead from '../components/helpers/MetaHead'
import Whatsapp from '../components/helpers/Whatsapp'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <MetaHead />
    <Whatsapp />
    <Navbar />
  <Component {...pageProps} />
  <Footer />
    </>
  )
}

export default MyApp
