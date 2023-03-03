import Gif from "./Gif";
import React, { useState, useEffect } from "react";
import getGifts from "../../services/getGifs";

export default function ListOfGifs({ params}) {
  const {keyword} = params
  const [gifs, setGifs] = useState([]);
  const [loanding, setLoanding] = useState(false)
  useEffect(() => {
    setLoanding(true)
    getGifts({keyword})
      .then((gifs) => setGifs(gifs));
      setLoanding(false)
  }, [keyword]);

  if(loanding) return <span>loanding...</span>

  return (
  <>{
  gifs.map(({ id, title, url }) => (
    <Gif key={id} title={title} url={url} id={id} />
  ))}</>)
}
