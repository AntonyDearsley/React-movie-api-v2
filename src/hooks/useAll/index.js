import { useEffect, useState } from 'react'
import getMovies from '../../services/getMovies'

export function useAll({ keyword }) {
    const [parameter, setParameter] = useState([])
    const [page] = useState(1)

    useEffect(() => {
        getMovies({ keyword , page })
            .then(elements => {
              setParameter(elements)
              setTimeout(() => {
                window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
              }, 500)
            }) 
    }, [keyword, page]) 


    return {parameter, setParameter};
}