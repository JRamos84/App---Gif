import { useState } from "react";
import "./App.css";
import { Route, Link } from "wouter";
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'


const App = ()=> {
  const [keyword, setKeyword] = useState("panda");
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img src="/logos.svg" alt="logos" className="App-logo" />
        </Link>
        <Route
          component={Home}
          path = "/"
        />
        <Route
        component={SearchResults}
        path = "/search/:keyword"
        />
        <Route
          component={Detail}
          path = "/gif/:id"
        />
      </section>
    </div>
  );
}

export default App;
