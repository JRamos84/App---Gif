import React, {Suspense} from 'react'
import useNearScrenn from 'hooks/useNearScreen'


const TrendingSearches = React.lazy(()=> import('./TrendingSearches'))



export default function LazyTrending() {
    const { isNearScreen, fromRef } = useNearScrenn({ distance: '50px' })
  //  console.log('aqui')
    return <div ref={fromRef}>
        <Suspense fallback={'Estoy cargando'}>
        {isNearScreen ? <TrendingSearches /> : null}
        </Suspense>

    </div>
}