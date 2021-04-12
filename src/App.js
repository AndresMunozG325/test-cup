import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import Ordenar from './components/Ordenar/Ordenar';
import Filtros from './components/Ordenar/Filtros';
import RowBtns from './components/Home/RowBtns';
import Mapa from './components/Mapa/Mapa';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/ordenar">
          <Ordenar />
        </Route>
        <Route path="/filtros">
          <Filtros />
        </Route>
        <Route path="/mapa">
          <Navbar />
          <RowBtns />
          <Mapa />
        </Route>
        <Route path="/">
          <Navbar />
          <RowBtns />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
