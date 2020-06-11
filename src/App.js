import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Tutorials from './pages/Tutorials';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/events' component={Events} exact/>
          <Route path='/tutorials' component={Tutorials} exact/>
          <Route path='/team' component={Team} exact/>
          <Route path='/gallery' component={Gallery} exact/>
          <Route path='/contact' component={Contact} exact/>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
