import React, { useState } from 'react'
import { faLongArrowAltLeft, faStar } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from 'wouter'
import { Carousel } from 'react-responsive-carousel';
import { useMoviePopular } from '../../hooks/useMoviePopular';
import './index.css'

import ItemsCarousel from 'react-items-carousel';



export default function Movies() {
    const [, pushLocation] = useLocation()
    const parameter = useMoviePopular()
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    const handleClick = () => {
        window.history.back()
    }

    const handleDetails = e => {
        const id = e.target.id
        pushLocation(`/movie/detail/${id}`)
    }

    return <div className='h-full bg-black flex flex-col relative'>


        <section className='w-full h-12 flex items-center bg-zinc-900/70 absolute z-10'>
            <div className='w-10 flex items-center text-zinc-100 hover:cursor-pointer absolute left-6'
                onClick={handleClick}>
                <FontAwesomeIcon icon={faLongArrowAltLeft} className='h-10 ' />
                <p className='h-10 flex items-center px-3'>ATRAS</p>
            </div>
        </section>



        <div className='w-full bg-white '>
            <Carousel className='' autoPlay={setTimeout(true, 1000)}
                infiniteLoop={true} showArrows={false} stopOnHover={true}
                showIndicators={true} showStatus={false} showThumbs={false}
                interval={5000} transitionTime={2000}>

                {parameter.loading === true ?
                    <div className='bg-black flex justify-center items-center'>
                        <div className=''>
                            <img className='h-96'
                                src="https://fbflurry.files.wordpress.com/2020/08/giphy-9.gif"
                                alt='loader' />
                        </div>
                    </div>
                    :
                    parameter.results.map(element => {
                        return <div className='' key={element.id}>
                            <div className=' h-full w-1/3 left-24 absolute flex flex-col justify-center items-start z-10'>
                                <div className="text-white text-shadow w-full  font-Montserrat text-left py-1">Estreno: {element.release_date} </div>
                                <div className="text-white text-shadow w-full text-left font-Montserrat py-1"><FontAwesomeIcon icon={faStar} className='text-yellow-400 text-shadow ' /> {element.vote_average} / 10 </div>
                                <div className={element.title.length > 33 ? "title large text-shadow w-full py-3" : "title extralarge text-shadow  w-full py-6"}> {element.title} </div>
                                <button className="h-10 w-28 border-2 boder-zinc-100 
                                font-sans font-bold text-white bg-black rounded-full 
                                hover:bg-red-600 hover:border-0" onClick={handleDetails}
                                    id={element.id}>Detalles</button>
                            </div>
                            <img className='h-96 brightness-75 blur-1' src={element.url} alt={element.title} />
                        </div>
                    })
                }
            </Carousel>
        </div>

        
        <div className='h-14 w-full flex items-center  border-b border-zinc-500'>
            <p className='font-Montserrat font-extrabold text-zinc-100 absolute left-4'>Películas de la semana</p>
        </div>
        <div className='text-black  px-16 max-w-full my-0 mx-auto'>
            <ItemsCarousel
                activePosition={'center'}
                infiniteLoop={true} 
                gutter={1}
                chevronWidth={30}
                numberOfCards={5}
                slidesToScroll={1}
                outsideChevron={true}
                activeItemIndex={activeItemIndex}
                requestToChangeActive={setActiveItemIndex}
                rightChevron={<button className='bg-white h-full w-8'>{'>'}</button>}
                leftChevron={<button className='bg-white h-full w-8' >{'<'}</button>}>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA</div>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA 2</div>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA 3</div>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA 4 </div>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA 5</div>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA 6</div>
            </ItemsCarousel>
        </div>

        <div className='h-14 w-full flex items-center  border-b border-zinc-500'>
            <p className='font-Montserrat font-extrabold text-zinc-100 absolute left-4'>Películas más votadas</p>
        </div>
        <div className='text-black  px-16 max-w-full my-0 mx-auto'>
            <ItemsCarousel
                activePosition={'center'}
                infiniteLoop={true} 
                gutter={1}
                chevronWidth={30}
                numberOfCards={5}
                slidesToScroll={1}
                outsideChevron={true}
                activeItemIndex={activeItemIndex}
                requestToChangeActive={setActiveItemIndex}
                rightChevron={<button className='bg-white h-full w-8'>{'>'}</button>}
                leftChevron={<button className='bg-white h-full w-8' >{'<'}</button>}>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA</div>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA 2</div>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA 3</div>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA 4 </div>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA 5</div>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA 6</div>
            </ItemsCarousel>
        </div>

        <div className='h-14 w-full flex items-center  border-b border-zinc-500'>
            <p className='font-Montserrat font-extrabold text-zinc-100 absolute left-4'>Proximos extrenos</p>
        </div>
        <div className='text-black  px-16 max-w-full my-0 mx-auto'>
            <ItemsCarousel
                activePosition={'center'}
                infiniteLoop={true} 
                gutter={1}
                chevronWidth={30}
                numberOfCards={5}
                slidesToScroll={1}
                outsideChevron={true}
                activeItemIndex={activeItemIndex}
                requestToChangeActive={setActiveItemIndex}
                rightChevron={<button className='bg-white h-full w-8'>{'>'}</button>}
                leftChevron={<button className='bg-white h-full w-8' >{'<'}</button>}>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA</div>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA 2</div>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA 3</div>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA 4 </div>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA 5</div>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA 6</div>
            </ItemsCarousel>
        </div>

        <div className='h-14 w-full flex items-center  border-b border-zinc-500'>
            <p className='font-Montserrat font-extrabold text-zinc-100 absolute left-4'>Películas de la semana</p>
        </div>
        <div className='text-black  px-16 max-w-full my-0 mx-auto'>
            <ItemsCarousel
                activePosition={'center'}
                infiniteLoop={true} 
                gutter={1}
                chevronWidth={30}
                numberOfCards={5}
                slidesToScroll={1}
                outsideChevron={true}
                activeItemIndex={activeItemIndex}
                requestToChangeActive={setActiveItemIndex}
                rightChevron={<button className='bg-white h-full w-8'>{'>'}</button>}
                leftChevron={<button className='bg-white h-full w-8' >{'<'}</button>}>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA</div>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA 2</div>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA 3</div>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA 4 </div>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA 5</div>
                <div className='bg-red-500 h-24 w-28 border border-black ml-14 '> HOLA 6</div>
            </ItemsCarousel>
        </div>
    </div>
}
