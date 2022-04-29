import React from 'react'
import ListOfArticles from '../ListOfArticles'

export default function Menu(params) {  
  return <div className={params.css}>
       <ListOfArticles list={params.list} css={params.cssArticles}/>
  </div>
}
