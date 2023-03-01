import { useState } from "react";
import ListOfGifs from "./componentes/ListOfGifs";
import "./App.css";

import { Route, Link } from "wouter";
function App() {
  const [keyword, setKeyword] = useState("panda");
  return (
    <div className="App">
      <section className="App-content">
        <button onClick={() => setKeyword("mapache")}>cambiar todo</button>
      <h1>App</h1>
      <Link to="/gif/panda">Panda</Link>
      <Link to="/gif/css">css</Link>
      <Link to="/gif/argentina">Argentina</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
