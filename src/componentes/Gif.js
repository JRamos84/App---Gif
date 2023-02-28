import React from "react";

export default function Gif({id, title,url,}){
    return(
        <div>
            <h4>{id}</h4>
            <small>{title}</small>
            <img src={url} alt={title} />
        </div>
    )
}