
import ListOfGifs from 'componentes/ListOfGifs'
import { useGifs } from 'hooks/useGifs'


export default function SearchResults({ params }) {
    const { keyword } = params
    const { loandig, gifs,setPage } = useGifs({ keyword })
    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1)
        
    }

    return <>
        {loandig ? <h1>loanding...</h1> :
            <>
                <h3 className='App-title'>{decodeURI(keyword)}</h3>
                <ListOfGifs gifs={gifs} />
            </>}
        <br />
        <button onClick={handleNextPage}>Get next page</button>

    </>
}