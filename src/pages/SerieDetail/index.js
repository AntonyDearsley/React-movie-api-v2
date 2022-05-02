import React from 'react'
import {  useSerieDetail } from '../../hooks/useSerieDetail'

export default function SerieDetail({ params }) {
    const { id } = params
    const parameter = useSerieDetail(id)
   
    return <div>
        <img src={parameter.posterurl} alt={parameter.name}></img><br/>
        <a href={parameter.homepage}> PAGINA WEB</a><br/>
        <h2>Titulo: {parameter.name}</h2><br/>
        <p>Sinopsis: {parameter.overview}</p>
    </div>
}