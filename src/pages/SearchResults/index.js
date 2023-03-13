import React, {useEffect, useRef} from 'react'
import ListOfGifs from 'componentes/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import useNearScrenn from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'


export default function SearchResults({ params }) {
    const { keyword } = params
    const { loandig, gifs,setPage } = useGifs({ keyword })
    const externalRef = useRef()
    const {isNearScreen} = useNearScrenn({externalRef: loandig ? null : externalRef})
    console.log(isNearScreen)
    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1)
        
    }
    const debounceHandleNextPafe = ()=> debounce(handleNextPage,1000)

    useEffect(function(){
        if(isNearScreen) debounceHandleNextPafe()
    },[])

    return <>
        {loandig ? <h1>loanding...</h1> :
            <>
                <h3 className='App-title'>{decodeURI(keyword)}</h3>
                <ListOfGifs gifs={gifs} />
                <div id='visor' ref={externalRef}></div>
            </>}
        <br />


    </>
}