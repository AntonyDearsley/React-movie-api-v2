import React from 'react'
import Article from '../Article'

const list = {
    'HOME': '/', 
    'MOVIES': '/movie',
    'SERIES': '/serie',
    'GAMES': '/game'
}

export default function ListOfArticles() {
  return <div className="articles">
   {
       Object.keys(list).map(function(e) {
            return <Article key={e} children={e} url={this[e]}/ >
        }, list)
   }
    
  </div>
}
