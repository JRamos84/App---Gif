import React, { useState } from 'react'
import { Link, useLocation } from "wouter"

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia", "Ecuador"]


export default function Home() {
    const [keyword, setKeyword] = useState('')
    const  [path, pushLocation]= useLocation()
    const handleSubmit = evt=>{
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
        //Navegar a otra ruta
    }

    const handlChange = evt=>{
        setKeyword(evt.target.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handlChange}  type='text' value={keyword} placeholder="Search a gif here..."/>
            </form>
            <h3>Los gifs más populares</h3>

            <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>
                            Gifs de {popularGif}
                        </Link>

                    </li>
                ))}
            </ul>
        </>
    )
}