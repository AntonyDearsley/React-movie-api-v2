import { useEffect, useState } from 'react'
import getMovieVideo from '../../services/getMovieVideo'

export function useMovieVideo(id) {
    const [parameter, setParameter] = useState('')


    useEffect(() => {   
        getMovieVideo({ id })
            .then(elements => {
              setParameter(elements)
            }) 
    }, [id]) 


    return parameter

}