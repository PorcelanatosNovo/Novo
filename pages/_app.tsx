import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import MetaHead from '../components/helpers/MetaHead'
import Whatsapp from '../components/helpers/Whatsapp'
import Footer from '../components/Footer'
import { motion } from "framer-motion";
import NextSEO from '../components/helpers/NextSEO'
import Script from "next/script";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
    <Script
        strategy="afterInteractive" id="gtag-manager"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG}`}
      />
      <Script strategy="lazyOnload"  id="gtag">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.GTAG});
        `}
      </Script>
    <MetaHead />
    <NextSEO />
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
