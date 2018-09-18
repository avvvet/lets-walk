import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Map from './components/Map';
import About from './components/About';
import Contact from './components/Contact';
import Ops from './components/Ops';
import Navigate from './components/Navigate';
import {Button, Image} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
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
      <div className="footer">
        <div className="footer-text"><Image src="/assets/male.png" height={30}></Image> lets^walk <Image src="/assets/female.png" height={30}></Image> <strong>social walking app</strong> copyright 2019 - Awet Tsegazeab <Button bsStyle="success">Sign in</Button></div>
      </div>
      </div>
    );
  }
}

export default App;
