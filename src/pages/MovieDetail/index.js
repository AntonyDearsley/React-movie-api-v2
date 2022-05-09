import React from 'react'
import { useMovieDetail } from '../../hooks/useMovieDetail'
import { faLongArrowAltLeft } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from 'wouter'
import { useMovieVideo } from '../../hooks/useMovieVideo'

export default function MovieDetail({ params }) {
    const { id } = params
    const parameter = useMovieDetail(id)
    const key = useMovieVideo(id)
    const [,pathLocation] = useLocation()

    const handleClick = ()=> {
        pathLocation('/')
    }


    return <section className='h-screen border-4 border-green-500 flex flex-col font-Montserrat'>

        <section className='w-full h-12 flex items-center pl-6 bg-zinc-900 border-4 border-blue-500'>
            <div className='w-10 flex items-center text-zinc-100 hover:cursor-pointer'
            onClick={handleClick}>
                <FontAwesomeIcon icon={faLongArrowAltLeft} className='h-10 mx-2' />
                <p>HOME</p>
            </div>
        </section>

        <section className='flex flex-wrap h-full max-h-[92%] border-4 border-red-500 relative'>

            {/* Background with filter */}
            <div className='h-full object-cover w-full -z-[9] bg-black/80 absolute'></div>
            <img src={parameter.backdropurl} className="w-full -z-10 absolute h-full" alt="" />

            {/* Poster with buttom to website */}
            <article className='px-8 h-full w-[28%] flex items-center border-4 border-purple-500 relavite'>
                <div>
                    <img src={parameter.posterurl} alt={parameter.title}
                    className='rounded-t-xl h-auto' />
                    <div className='bg-zinc-900 h-10 flex justify-center items-center
                    text-white font-bold rounded-b-xl hover:bg-amber-500 hover:cursor-pointer hover:text-black'>
                        <a href={parameter.homepage}>PAGINA WEB</a>
                    </div>
                </div>
            </article>


            <article className='p-9 w-[45%] max-h-full text-zinc-100 overflow-auto border-2 border-white'>
                <h2 className='text-2xl font-bold'>Titulo: {parameter.title}</h2>
                <p className='my-4' >Sinopsis: {parameter.overview}</p>
                <iframe
                    src={`https://www.youtube.com/embed/${key}`}
                    allow="autoplay; encrypted-media; fullscreen"
                    title={parameter.title}
                    className='w-full h-80 my-10 rounded-lg'
                />
            </article>

            <article className="flex flex-col border-4 border-white flex-grow">
                <div className='bg-red-500 w-full'>
                    PUNTUACION Y FAVORITO
                </div>
                <div className='bg-yellow-500 w-full'>
                    ACTORES
                </div>
            </article>
        </section>
    </section>
}