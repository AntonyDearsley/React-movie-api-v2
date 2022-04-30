import React from 'react'
import {  useMovieDetail } from '../../hooks/useMovieDetail'

export default function MovieDetail({ params }) {
    const { id } = params
    const parameter = useMovieDetail(id)
   
    return <div>
        <img src={parameter.posterurl} alt={parameter.title}></img><br/>
        <a href={parameter.homepage}> PAGINA WEB</a><br/>
        <h2>Titulo: {parameter.title}</h2><br/>
        <p>Sinopsis: {parameter.overview}</p>
    </div>
}