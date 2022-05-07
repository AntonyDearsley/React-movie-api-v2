import React from 'react'
import CarouselElements from '../Carousel-Elements'

export default function Carousel({ list, cssSlides, cssCarousel, cssImages }) {
  return <div className={cssCarousel}>
      <CarouselElements cssSlides={cssSlides} 
      list={list} cssImages={cssImages}/>
  </div>
}