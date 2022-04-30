import { useEffect, useState } from 'react'
import getAll from '../../services/getAll'

export function useAll({ keyword }) {
    const [parameter, setParameter] = useState([])
    const [page] = useState(1)

    useEffect(() => {
        getAll({ keyword , page })
            .then(elements => {
              setParameter(elements)
              /*
              setTimeout(() => {
                window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
              }, 500)
              */
            }) 
    }, [keyword, page]) 


    return {parameter, setParameter};
}