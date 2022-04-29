import React from 'react'
import { useLocation } from 'wouter'

export default function Article({ children , url}) {
  const [, pathLocation] = useLocation()
  
  const handleClick = () => {
    pathLocation(url)
  }

  return <div key={url} className='article' onClick={handleClick}>
    {children}
  </div>
  
}
