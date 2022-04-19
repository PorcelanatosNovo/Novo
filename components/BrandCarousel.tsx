//@ts-nocheck
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
import React from 'react'

function BrandCarousel() {
  return (
    <Carousel responsive={responsive}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={1000}
    itemClass="carousel-item-padding-40-px"
    containerClass="mb-10 z-20"
    >
    <Image src="/vite.webp" width={200} height={200} alt="vite logo"/>
    <Image src="/alberdi.webp" width={200} height={200} alt="alberdi logo"/>
    <Image src="/allpa.webp" width={200} height={200} alt="allpa logo"/>
    <Image src="/klaukol.webp" width={200} height={200} alt="klaukol logo"/>
    <Image src="/roca.webp" width={200} height={200} alt="roca logo"/>
    <Image src="/ferrum.webp" width={200} height={200} alt="ferrum logo"/>
    <Image src="/fv.webp" width={200} height={200} alt="fv logo"/>
    <Image src="/weber.webp" width={200} height={200} alt="weber logo"/>
    <Image src="/johnson.webp" width={200} height={200} alt="johnson logo"/>
  </Carousel>
  )
}

export default BrandCarousel