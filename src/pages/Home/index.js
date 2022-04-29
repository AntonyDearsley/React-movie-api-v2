import React, { useState } from 'react'
import { useLocation } from 'wouter'
import Menu from '../../components/Menu'
import "./index.css"
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const list = {
    'HOME': '/', 
    'MOVIES': '/movie',
    'SERIES': '/serie',
    'GAMES': '/game'
}

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [, pushLocation] = useLocation()

    const handleSubmit = e => {
        e.preventDefault()
        keyword === '' ? pushLocation('/404')  
        : pushLocation(`/search/movie/${keyword}`)
    }

    const handleChange = e => {
        setKeyword(e.target.value)
    }

    return  <div id='container' className='home'>
                <Menu list={list} css={"menuV"} cssArticles={"articlesV"}/>
                <div className='h-screen sm:w-screen flex justify-center items-center'>
                    <form onSubmit={handleSubmit} className="relative">
                        <input placeholder=" Search a title here..." onChange={handleChange} 
                        type='text' value={keyword} className='rounded-full p-3 
                        w-[20rem] sm:w-[23rem] lg:w-[38rem] outline-double 
                        focus:outline-8 focus:outline-white font-Montserrat' />
                        <FontAwesomeIcon icon={faSearch} className="text-black text-xl absolute 
                        right-5 top-3"/>
                    </form>
                </div>
            </div>
}