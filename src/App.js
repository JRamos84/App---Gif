import { useState } from "react";
import "./App.css";
import { Route, Link } from "wouter";
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifContext";

const App = () => {

  return (
    <StaticContext.Provider value={{
      name: 'Jose',
      apellido: 'Ramos'
    }}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img src="/logos.svg" alt="logos" className="App-logo" />
          </Link>
          <GifsContextProvider>

            <Route
              component={Home}
              path="/"
            />
            <Route
              component={SearchResults}
              path="/search/:keyword"
            />
            <Route
              component={Detail}
              path="/gif/:id"
            />
          </GifsContextProvider>

        </section>
      </div>
    </StaticContext.Provider>

  );
}

export default App;
