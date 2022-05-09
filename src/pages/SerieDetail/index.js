import React from 'react'
import { useSerieDetail } from '../../hooks/useSerieDetail'
import { faLongArrowAltLeft } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from 'wouter'

export default function SerieDetail({ params }) {
    const { id } = params
    const parameter = useSerieDetail(id)
    const [,pathLocation] = useLocation()

    const handleClick = ()=> {
        pathLocation('/')
    }


    return <section className='h-screen overflow-hidden flex flex-col font-Montserrat'>
        <section className='w-full h-12 flex items-center pl-6 bg-zinc-900'>
            <FontAwesomeIcon icon={faLongArrowAltLeft} onClick={handleClick}
            className='h-10 flex items-center text-white hover:cursor-pointer' >
                HOME
            </FontAwesomeIcon>
        </section>
        <section className='flex flex-wrap w-screen'>
            <div className='h-full w-full -z-[9] bg-black/80 absolute'></div>
            <img src={parameter.backdropurl}  className="h-full w-full -z-10 absolute " alt="" />
            <article className='px-8 my-10 h-screen '>
                <img src={parameter.posterurl} alt={parameter.name}
                className='rounded-t-xl w-80 h-[75%]' />
                <div className='bg-zinc-900 h-10 flex justify-center items-center
                 text-white font-bold rounded-b-xl hover:bg-amber-500 hover:cursor-pointer hover:text-black'>
                    <a href={parameter.homepage}>PAGINA WEB</a>
                </div>
                    
            </article>
            <article className='p-8 w-1/2 text-zinc-100'>
                <h2 className='text-2xl font-bold'>Titulo: {parameter.name}</h2>
                <p className='my-8'>Sinopsis: {parameter.overview}</p>
            </article>

            <article className="flex flex-wrap flex-col">
                <div className='bg-red-500 h-28 w-32'>
                    PUNTUACION Y FAVORITO
                </div>
                <div className='bg-yellow-500 h-28 w-32'>
                    ACTORES
                </div>
            </article>
        </section>
    </section>
}