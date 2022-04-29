import ListOfElements from '../../components/ListOfElements'
import Button from '../../components/Button'
import { useHandleClickSeries } from '../../hooks/handleClickSeries'
import Error404 from '../404'
import Menu from '../../components/Menu'

export default function SearchSeries({ params }) {
    const keyword  = params
    const {handleClick, parameter} = useHandleClickSeries(keyword)
    
    const list = {
        'HOME': '/', 
        'MOVIES': `/search/movie/${params.keyword}`,
        'SERIES': `/search/serie/${params.keyword}`,
        'GAMES': ''
    }
    
    
    if (parameter.length === 0) {
        return <Error404 />
    }

    return <div id='container' className='bg-zinc-900 h-full text-white flex flex-col items-center'>
            <Menu list={list} css={"menuH"} cssArticles={"articlesH"}/>
            <div className='container'>
                <ListOfElements element={parameter} />
            </div>
                
            <div>
                <Button handleClick={handleClick}>Más Series</Button>
            </div>
        </div>

}
    
