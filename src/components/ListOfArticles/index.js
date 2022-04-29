import React from 'react'
import Article from '../Article'

export default function ListOfArticles(params) {
  const { list } = params
  return <div className={params.css}>
   {
       Object.keys(list).map(function(e) {
            return <Article key={e} children={e} url={this[e]} / >
        }, list)
   }
    
  </div>
}
