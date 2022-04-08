import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import MetaHead from '../components/helpers/MetaHead'
import Whatsapp from '../components/helpers/Whatsapp'
import Footer from '../components/Footer'
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
    <MetaHead />
    <Whatsapp />
    <Navbar />
    <motion.div
      key={router.route}
      initial="initial"
      animate="animate"
      
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
  <Component {...pageProps} />
  </motion.div>
  <Footer />
    </>
  )
}

export default MyApp
