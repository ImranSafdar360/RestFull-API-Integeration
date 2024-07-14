// /* eslint-disable no-unused-vars */
// import React from 'react'

// const HeroSection = () => {
//   return (
//     <div id="carouselExampleFade" className="carousel slide carousel-fade w-100 h-100">
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img style={{ objectFit: 'cover', height: '100vh' }} src="https://img.freepik.com/premium-vector/flash-sale-realistic-promotion-banner-online-shop-template_16148-1493.jpg?w=826" className="d-block w-100" alt="..." />
//     </div>
//     <div className="carousel-item">
//       <img style={{ objectFit: 'cover', height: '100vh' }} src="https://img.freepik.com/free-photo/black-friday-concept-with-board-label-cart_23-2147695912.jpg?t=st=1720958207~exp=1720961807~hmac=9094892929d1bfce2a907abbaf1512107fcee9a8bbc6bf0034feacff62f42b21&w=826" className="d-block w-100" alt="..." />
//     </div>
//     <div className="carousel-item">
//       <img style={{ objectFit: 'cover', height: '100vh' }} src="https://img.freepik.com/free-vector/gradient-flash-sale-background_23-2149027975.jpg?t=st=1720958168~exp=1720961768~hmac=521267f09cf1aedcf62991dadba45ecaf35fb4a0c4fb3b8ce599f9cd7bc620e7&w=826" className="d-block w-100" alt="..." />
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
//   )
// }

// export default HeroSection


import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='swiper-images'>
      <Carousel.Item>
        <ExampleCarouselImage src={"https://img.freepik.com/free-vector/gradient-flash-sale-background_23-2149027975.jpg?t=st=1720958168~exp=1720961768~hmac=521267f09cf1aedcf62991dadba45ecaf35fb4a0c4fb3b8ce599f9cd7bc620e7&w=826"} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={"https://img.freepik.com/free-photo/black-friday-concept-with-board-label-cart_23-2147695912.jpg?t=st=1720958207~exp=1720961807~hmac=9094892929d1bfce2a907abbaf1512107fcee9a8bbc6bf0034feacff62f42b21&w=826"} text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={"https://img.freepik.com/premium-photo/shopping-bag-price-tag-year-end-sale-11-11-singles-day-sale-concept_61573-2148.jpg?w=826"} text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;