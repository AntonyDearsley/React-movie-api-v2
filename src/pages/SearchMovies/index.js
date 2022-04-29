import ListOfElements from '../../components/ListOfElements'
import Button from '../../components/Button'
import Menu from '../../components/Menu'
import { useHandleClickMovie } from '../../hooks/handleClickMovie'
import Error404 from '../404'



export default function SearchMovies({ params }) {
    const keyword = params
    const {handleClick, parameter} = useHandleClickMovie(keyword)

    const list = {
        'HOME': '/', 
        'MOVIES': `/search/movie/${params.keyword}`,
        'SERIES': `/search/serie/${params.keyword}`,
        'GAMES': ''
    }

    

    if (parameter.length === 0){
        return <Error404 />
    }

    return <div id='container' className='bg-zinc-900 h-full text-white flex flex-col items-center'>
            <Menu list={list} css={"menuH"} cssArticles={"articlesH"}/>
            <div className='container'>
                <ListOfElements element={parameter} />
            </div>
                
            <div>
                <Button handleClick={handleClick}>Más Películas</Button>
            </div>
        </div>
}
    
