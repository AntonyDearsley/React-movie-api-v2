import React from 'react'
import { useLocation } from 'wouter'

export default function Article({ children , url, cssArticle }) {
  const [, pathLocation] = useLocation()
  
  const handleClick = () => {
    pathLocation(url)
  }

  return <div key={url} className={`article ${cssArticle}`} onClick={handleClick}>
    {children}
  </div>
  
}
