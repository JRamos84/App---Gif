import { useState, useEffect, useContext } from 'react'
import getGifts from '../services/getGifs'
import GifsContext from '../context/GifContext'

export function useGifs({ keyword } = { keyword: null }) {
    const [loandig, setLoanding] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)
    

    useEffect(function () {
        setLoanding(true)
        const keywordToUse = keyword || localStorage.getItem('lastKeyword')

        getGifts({ keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoanding(false)
                localStorage.setItem('lastKeyword', keyword)

            })
    }, [keyword])

    return { loandig, gifs }
}
