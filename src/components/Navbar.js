import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md special-color navbar-dark fixed-top">
        <a className="navbar-brand" href="/">UniCS GameDev</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
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
              <a className="nav-link" href="/team">Team</a>
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
