import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Map from './components/Map';
import About from './components/About';
import Contact from './components/Contact';
import Ops from './components/Ops';
import Navigate from './components/Navigate';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navigate />
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/map" component={Map} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Ops} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
