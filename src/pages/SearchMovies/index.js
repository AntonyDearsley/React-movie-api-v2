import ListOfElements from '../../components/ListOfElements'
import Button from '../../components/Button'
import Menu from '../../components/Menu'
import { useHandleClickMovie } from '../../hooks/handleClickMovie'
import E404 from '../../components/404'



export default function SearchMovies({ params }) {
    const keyword = params
    const {handleClick, parameter} = useHandleClickMovie(keyword)

    const list = {
        'HOME': '/', 
        'MOVIES': `/search/movie/${params.keyword}`,
        'SERIES': `/search/serie/${params.keyword}`,
        'GAMES': ''
    }

 
    return <div id='container' className='bg-zinc-900 h-full text-white flex flex-col items-center'>
            <Menu list={list} css={"menuH"} cssArticles={"articlesH"}/>

            {parameter.loading === true ?

                <div className='container flex justify-center items-center h-screen'>
                    <span class="loader" />
                </div>  
        
            : parameter.results.length === 0 ? 

                <div className='bg-[#1b1b1b] h-screen w-full 
                    relative flex justify-center items-center overflow-hidden'>
                    <E404 />
                </div>
            
            :
                <>
                    <div className='container'>
                        <ListOfElements element={parameter.results} />
                    </div>
                
                    <div>
                        <Button handleClick={handleClick}>Más Películas</Button>
                    </div>
                </>

            }
    </div>
}
    
