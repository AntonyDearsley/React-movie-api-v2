import Element from '../Element'

export default function ListOfElements({ element }) {
  return element.map(({id, title , url }) => 
      <Element
        key = {id}
        id = {id}
        title = {title}
        image = {url}
      /> 
  )
}

