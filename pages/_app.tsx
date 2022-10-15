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
         src={`https://www.googletagmanager.com/gtag/js?id=G-PFRXGSP035`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PFRXGSP035');
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
