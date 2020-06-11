import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar></Navbar>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
