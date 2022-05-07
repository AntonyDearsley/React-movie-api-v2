import React from 'react'

export default function CarouselElements({ list, cssSlides, cssImages }) {
  return Object.keys(list).map(function(e) {     
    return <div name={`slide${e}`} className={cssSlides}>
              <img src={this[e]} alt={e} className={cssImages} />
              <p className="legend">{e}</p>
            </div> 
  }, list)
}