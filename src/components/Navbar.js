import React, { Component } from 'react';
import './Navbar.css';

const CollapseNavbar = () => {
  let button = document.getElementById("navbar-button");
  if(button) {
    button.click()
  }
}

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md special-color-dark navbar-dark">
        <a className="navbar-brand" href="/">UniCS GameDev</a>
        <button id="navbar-button" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-label="Open Menu">
          <span className="navbar-toggler-icon"></span>
  		  </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/events">Events</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/tutorials">Tutorials</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/#team" onClick={CollapseNavbar}>Team</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/gallery">Gallery</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
