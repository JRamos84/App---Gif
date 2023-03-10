import { API_KEY, API_URL } from './setting'


const fromApiResponseToGifs = apiResponse => {
    const { data = [] } = apiResponse
    return data

}




export default function getTrendingTerms() {
    //console.log('get',keyword)
    const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;
    return fetch(apiURL)
        .then((res) => res.json())
        .then(fromApiResponseToGifs)

}
