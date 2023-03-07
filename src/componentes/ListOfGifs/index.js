import Gif from '../Gif'
import './styles.css'
export default function ListOfGifs({gifs}) {
  
  return (
  <div className='ListOfGifs'>
      {
  gifs.map((gif) => (
    <div key={gif.id}> <Gif {...gif} /></div>
    
  ))}
  </div>)
}
