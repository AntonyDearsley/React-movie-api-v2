import React, { useState } from 'react'
import { useLocation } from 'wouter'
import Menu from '../../components/Menu'
import "./index.css"
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useBackdrop } from '../../hooks/useBackdrop'

const list = {
  'HOME': '/',
  'MOVIES': '/movie',
  'SERIES': '/serie',
  'GAMES': '/game'
}

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [, pushLocation] = useLocation()
  const parameter = useBackdrop()

  const handleSubmit = e => {
    e.preventDefault()
    keyword === '' ? pushLocation('/404')
      : pushLocation(`/search/${keyword}`)
  }

  const handleChange = e => {
    setKeyword(e.target.value)
  }

  let i = -1
  console.log(parameter)

  return <div id='container' className='home'>
    <Menu list={list} css={"menuV"} cssArticles={"articlesV"} />
    <div className='h-screen sm:w-screen flex flex-col items-center'>
     
      <div className='w-11/12 bg-white my-10'>       
            <Carousel className=''
             autoPlay={true} infiniteLoop={true} showArrows={true} 
             showIndicators={false} showStatus={false} showThumbs={false} 
             interval={8000} transitionTime={2000}>
                   
               {parameter === undefined ?
                    <div className=''>
                          <img className='h-96'
                          src="https://www.infodrones.it/wp-content/uploads/2018/09/load-800x450.png.webp" 
                          alt='loader'/>
                    </div>
                 :  
                 parameter[0].map(() => { 
                    i++;
                    return <div className='' key={parameter[0][i]}>
                      <div className='absolute z-10 w-[255px]  left-[37%]'>
                      <img 
                          src={parameter[1][i]} alt='img1' className='h-30'/>
                      </div> 
                       <img className='h-96 brightness-75 blur-[2px]'
                       src={parameter[0][i]} alt={`img${i}`}/>
                     </div>
                  })
                 }
            </Carousel>
        </div>

      <form onSubmit={handleSubmit} className="relative">
        <input placeholder=" Search a title here..." onChange={handleChange}
          type='text' value={keyword} className='rounded-full p-3 mt-1
                        w-[20rem] sm:w-[23rem] lg:w-[38rem] outline-double 
                        focus:outline-8 focus:outline-white font-Montserrat' />
        <FontAwesomeIcon icon={faSearch} className="text-black text-xl absolute 
                        right-5 top-5 hover:cursor-pointer" onClick={handleSubmit}/>
      </form>
    </div>
  </div>
}