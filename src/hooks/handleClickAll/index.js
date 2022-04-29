import {useState} from "react"
import getMovies from "../../services/getMovies"
import { useAll } from "../useAll"


export function useHandleClickAll({ keyword }) {
    const {parameter, setParameter} = useAll({ keyword })
    const [page, setPages] = useState(2)

    const handleClick = () => {
        setPages(page+1)
        getMovies({ keyword , page })
        .then(elements => {
            setParameter(parameter.concat(elements))
        })

        setTimeout(() => {
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        }, 500)
    }
    
    return {handleClick, parameter}
}