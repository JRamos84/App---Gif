import { useState, useEffect, useContext } from 'react'
import getGifts from '../services/getGifs'
import GifsContext from '../context/GifContext'
const INITIAL_PAGE = 0

export function useGifs({ keyword } = { keyword: null }) {
    const [loandig, setLoanding] = useState(false)
    const [loandigNextPage, SetLoandingNextPage] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)
    const { gifs, setGifs } = useContext(GifsContext)
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'


    useEffect(function () {
        setLoanding(true)

        getGifts({ keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoanding(false)
                localStorage.setItem('lastKeyword', keyword)

            })
    }, [keyword,keywordToUse, setGifs])

    useEffect(function () {
        if (page === INITIAL_PAGE) return
     //   console.log(page)
        SetLoandingNextPage(true)
        getGifts({keyword: keywordToUse, page})
         .then(nextGifs=>{
            setGifs(prevGifs => prevGifs.concat(nextGifs))
            SetLoandingNextPage(false)
         })
    }, [page , keywordToUse, setGifs])
    return { loandig, loandigNextPage, gifs, setPage }
}
