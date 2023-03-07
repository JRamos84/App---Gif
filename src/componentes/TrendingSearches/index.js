import React, { useEffect, useState } from 'react'
import getTrendingTerms from 'services/getTrendingTermsService'
import Category from '../Category'
import useNearScrenn from 'hooks/useNearScreen'

function TrendingSearches() {
    const [trends, setTrends] = useState([])

    useEffect(function () {
        getTrendingTerms().then(setTrends)

    }, [])

    return <Category name='Tendencias' options={trends} />
}




export default function LazyTrending() {
    const {isNearScreen, fromRef}= useNearScrenn({distance:'150px'})


    

    return <div ref={fromRef}>
        {isNearScreen ? <TrendingSearches /> : null}
    </div>
}