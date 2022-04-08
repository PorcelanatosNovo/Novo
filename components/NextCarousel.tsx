import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class NextCarousel extends Component {
	render() {
		return (
			<div className='m-w-11/12 p-4'>
			<Carousel
			autoPlay={true}
			stopOnHover={true}
			transitionTime={10}
			infiniteLoop={true}
			emulateTouch={true}
			>
				<div>
					<img src="/1.webp" alt="image1" loading='lazy'/>

				</div>
				<div>
					<img src="/2.webp" alt="image2" loading='lazy' />

				</div>
				<div>
					<img src="/3.webp" alt="image3" loading='lazy'/>

				</div>
				<div>
					<img src="/4.webp" alt="image4" loading='lazy'/>

				</div>
				<div>
					<img src="/5.webp" alt="image5"/>

				</div>
			</Carousel>
			</div>
		);
	}
};
