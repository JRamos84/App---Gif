import Gif from "./Gif";
import React, { useState, useEffect } from "react";
import getGifts from "../services/getGifs";

export default function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    
    getGifts({keyword})
      .then((gifs) => setGifs(gifs));
  }, [keyword]);

  return gifs.map(({ id, title, url }) => (
    <Gif key={id} title={title} url={url} id={id} />
  ));
}
