import { useState } from "react";
import ListOfGifs from "./componentes/ListOfGifs";

function App() {
  const [keyword ,  setKeyword]  = useState('panda')
  return (
    <div className="App">
      <section className="App-content">
      <button onClick={()=> setKeyword('mapache')}>cambiar todo</button>
        <ListOfGifs keyword= {keyword} />
        
      </section>
    </div>
  );
}

export default App;
