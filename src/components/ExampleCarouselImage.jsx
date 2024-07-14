/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ExampleCarouselImage = ({ src, alt }) => (
  <img
  style={{height: '100vh', objectFit: 'cover'}}
    className="d-block w-100"
    src={src}
    alt={alt}
  />
);

export default ExampleCarouselImage;
