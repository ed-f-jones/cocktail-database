import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";

// Navbar
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/About">
          <About />
        </Route>

        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>

        <Route>
          <Error exact path="*" />
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
