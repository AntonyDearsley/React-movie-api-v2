import ListOfElements from '../../components/ListOfElements'
import Button from '../../components/Button'
import { useHandleClickSeries } from '../../hooks/handleClickSeries'
import Menu from '../../components/Menu'
import E404 from '../../components/404'

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
        return <div id='container' className='bg-zinc-900 h-full text-white flex flex-col items-center'>
            <Menu list={list} css={"menuH"} cssArticles={"articlesH"} />
            <div className='bg-[#1b1b1b] h-screen w-full 
                relative flex justify-center items-center overflow-x-hidden' >
                <E404 />
            </div>
        </div>
    }

    return <div id='container' className='bg-zinc-900 h-full text-white flex flex-col items-center'>
            <Menu list={list} css={"menuH"} cssArticles={"articlesH"} />
            <div className='container'>
                <ListOfElements element={parameter} />
            </div>
                
            <div>
                <Button handleClick={handleClick}>Más Series</Button>
            </div>
        </div>
}
    
