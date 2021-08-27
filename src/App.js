import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PageHome from "./page-home";
import PageArtist from "./page-artist";
import { BrowserRouter as Browser, Switch, Route } from "react-router-dom";
import PageSearchResult from "./page-search-result";
import SimilarArtist from "./components/similar-artist";

function App() {
  return (
    <Browser>
      <Switch>
        <Route exact path="/busqueda" component={PageSearchResult} />
        <Route exact path="/artista" component={PageArtist} />
        <Route path="/" component={PageHome} />
      </Switch>
    </Browser>
  );
}

export default App;
