
import ListOfGifs from '../../componentes/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'


export default function SearchResults({params}){
const {keyword} = params
const {loandig, gifs} = useGifs({keyword})
//console.log(gifs)

    return <>
        {loandig ? <h1>loanding...</h1>:
        <ListOfGifs gifs={gifs}/>}
    </>
}