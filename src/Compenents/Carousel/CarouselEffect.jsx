import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './CarouselEffect.module.css';
import images from './data.js';
const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        className={styles.carousel}
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={2000}
        transitionTime={1000}
        stopOnHover={true}
      >
        {images?.map((image, i) => (
          <div className={styles.carousel_banner} key={i}>
            <img src={image} alt="" />
          </div>

        ))}

      </Carousel>
      <div className={styles.bottom_fade}>
        {/* fade bottom */}
      </div>
    </div>
  )
}

export default CarouselEffect