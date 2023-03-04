import React, { useContext } from 'react'
import GifContext from '../../context/GifContext'
import Gif from '../../componentes/Gif'

export default function Detail({ params }) {

    const { gifs } = useContext(GifContext)
    const gif = gifs.find(singleGif=> 
        singleGif.id === params.id)
        console.log(gifs)

    

    return <Gif {...gif}/>
}