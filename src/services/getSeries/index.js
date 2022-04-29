import getImage from "../getImage"

const api_key = 'b677204d99e9870416faefa56773d56c'
const img404 = 'https://images-na.ssl-images-amazon.com/images/I/41bLP6NzvKL.jpg'


export default async function getSeries({ keyword, page }) { 
    const apiURL = 
    `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&lenguage=es-ES&query=${keyword}&page=${page}`

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const data = response.results
            const series = data.map(serie => { 
                const { title, id, poster_path } = serie 
                const url = getImage(poster_path)
                return url === '' ? {id, title, url: img404} : { id, title, url }
            })
            return series
        })
}