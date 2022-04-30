import React from 'react';
import { useLocation } from 'wouter';

export  default  function Element (params) {
    const [, pathLocation] = useLocation()
    const condition = ()=> params.title === undefined ? params.name : params.title
    
    const handdleClick = ()=> {
        params.type  === "movie" ? pathLocation(`/movie/detail/${params.id}`)
        : pathLocation(`/404`)
    }
      
    return <div id={params.id} key={params.id} onClick={handdleClick}>
        <img 
        className='poster' title={`${params.type}-${()=>condition()}`} 
        src={params.image} 
        alt={`Element-${params.type}: ${condition()}`} 
         />
    </div>
}

