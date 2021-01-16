import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./pages/about";
import Data from "./pages/data";
import Home from "./pages/home";
import Header from "./components/header";

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app-body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/data" component={Data} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
