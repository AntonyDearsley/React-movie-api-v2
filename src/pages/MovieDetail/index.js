import React, { useState } from 'react'
import { useMovieDetail } from '../../hooks/useMovieDetail'
import { faLongArrowAltLeft } from '@fortawesome/fontawesome-free-solid'
import { faHeart as faHeartRegular, faListAlt } from '@fortawesome/fontawesome-free-regular'
import { faHeart as faHeartSolid } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from 'wouter'
import { useMovieVideo } from '../../hooks/useMovieVideo'
import { Carousel } from 'react-responsive-carousel';
import { useMovieCredits } from '../../hooks/useMovieCredits'
import "./index.css"

export default function MovieDetail({ params }) {
    const { id } = params
    const parameter = useMovieDetail(id)
    const results = useMovieVideo(id)
    const [, pathLocation] = useLocation()
    const [enable, setEnable] = useState(false)
    const actors = useMovieCredits(id)

    const handleClick = () => {
        pathLocation('/')
    }

    const heartClick = () => {
        setEnable(!enable)
    }

    const listClick = () => {
        alert("añadido a tu Lista")
    }


    return <section className='h-screen  flex flex-col font-Montserrat'>

        <section className='w-full h-12 flex items-center pl-6 bg-zinc-900 '>
            <div className='w-10 flex items-center text-zinc-100 hover:cursor-pointer'
                onClick={handleClick}>
                <FontAwesomeIcon icon={faLongArrowAltLeft} className='h-10 mx-2' />
                <p>HOME</p>
            </div>
        </section>

        <section className='flex flex-wrap h-full max-h-[92%]  relative'>

            {/* Background with filter */}
            <div className='h-full object-cover w-full -z-[9] bg-black/80 absolute'></div>
            <img src={parameter.backdropurl} className="w-full -z-10 absolute h-full" alt="" />

            {/* Poster with buttom to website */}
            <article className='px-8 h-full w-[28%] flex items-center relavite'>
                <div>
                    <img src={parameter.posterurl} alt={parameter.title}
                        className='rounded-t-xl h-auto' />
                    <div className='bg-zinc-900 h-10 flex justify-center items-center
                    text-white font-bold rounded-b-xl hover:bg-amber-500 hover:cursor-pointer hover:text-black'>
                        <a href={parameter.homepage}>PAGINA WEB</a>
                    </div>
                </div>
            </article>


            <article className='p-9 w-[45%] max-h-full text-zinc-100 overflow-auto '>
                <h2 className='text-2xl font-bold'>Titulo: {parameter.title}</h2>
                <p className='my-4' >Sinopsis: {parameter.overview}</p>
                {
                    results.loading === true ?

                        <div className='container flex justify-center items-center h-1/2 '>
                            <span className="loader  " />
                        </div>
                        : typeof results.key === 'undefined' ?
                            <>Trailer inexistente bobo</>
                            : <iframe
                                src={`https://www.youtube.com/embed/${results.key}`}
                                allow="autoplay; encrypted-media; fullscreen"
                                title={parameter.title}
                                className='w-full h-80 my-10 rounded-2xl'
                            />
                }
            </article>

            <article className="flex flex-col flex-grow ">
                <div className='text-white flex flex-col items-center justify-center rounded-xl h-1/4 w-full '>
                    <div>
                        <p>PUNTUACION Y FAVORITO</p>
                    </div>
                    <div className='flex justify-center w-full'>
                        <FontAwesomeIcon icon={enable === true ? faHeartSolid : faHeartRegular}
                            onClick={heartClick} className={enable === true ?
                            'icon-selected' : 'icon-unselected' } />

                        <FontAwesomeIcon icon={faListAlt}
                            onClick={listClick} className='h-10 text-zinc-100 hover:cursor-pointer mx-4' />
                    </div>
                </div>
                <div className=' h-3/4 w-full relative flex justify-center items-center'>
                    <div className='absolute w-5/6'>
                        
                        <Carousel className='carousel' autoPlay={setTimeout(true, 1000)} 
                            infiniteLoop={true} showArrows={true} centerMode={true}
                            showIndicators={false} showStatus={false} showThumbs={false}
                            interval={5000} transitionTime={3000} stopOnHover={false}>
                            {actors.loading === true ?
                                <div className='container flex justify-center items-center h-96 '>
                                    <span className="loader  " />
                                </div>
                                :
                                actors.results.slice(0, 10).map(actor => {
                                  
                                    return <div key={`${actor.cast_id}`} className="relative flex justify-center">
                                        <img src={`${actor.profileurl}`} alt="" />
                                        <div className='absolute bottom-0 bg-zinc-900/90 w-full' >
                                            <p className='text-zinc-100 font-bold font-Montserrat'>
                                                {actor.character}
                                            </p>
                                            <p className='text-zinc-400 font-bold font-Montserrat'>
                                                {actor.name}
                                            </p>
                                        </div>
                                    </div>
                                })
                            }
                        </Carousel>
                    </div>
                </div>
            </article>
        </section>
    </section>
}