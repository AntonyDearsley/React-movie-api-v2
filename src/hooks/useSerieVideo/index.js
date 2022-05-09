import { useEffect, useState } from 'react'
import getSerieVideo from '../../services/getSerieVideo'

export function useSerieVideo(id) {
    const [parameter, setParameter] = useState('')


    useEffect(() => {   
        getSerieVideo({ id })
            .then(elements => {
              setParameter(elements)
            }) 
    }, [id]) 


    return parameter
}