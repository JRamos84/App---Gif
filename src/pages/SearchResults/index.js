import Gif from '../../componentes/Gif';
import React, { useState, useEffect } from "react";
import getGifts from "../../services/getGifs";
import Link from 'wouter'

export default function SearchResults({ params }) {
    const { keyword } = params
    const [gifs, setGifs] = useState([]);
    const [loanding, setLoanding] = useState(false)
    useEffect(() => {

        setLoanding(true)
        getGifts({ keyword })
            .then((data) => setGifs(data));

        setLoanding(false)

    }, [keyword]);

    if (loanding) return <span>loanding...</span>



    return (
        <>
            <ul>
                {
                    gifs.map(({ id, title, url }) => (
                        <Gif key={id}
                            id = {id}
                            title={title}
                            url = {url}
                        />

                    ))}

            </ul>

        </>)
}