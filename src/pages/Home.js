import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return(
      <div className="home">
        <div className="box">
          <img id="home-img" src={require('../Assets/home_top.jpeg')} alt="GameDev Logo Image"/>
          <p className="img-text">A sub-group of UniCS with a focus on Game Development</p>
        </div>
        <div id="about-us">
          <h1>About Us</h1>
          <p>GameDev is the game development society of The University of Manchester.
          We are a passionate and determined group of developers who are curious to learn
          about the up and coming technologies within the gaming industry and share what we
          learn with others. We do this through our regular workshops and talks
          that anyone is able to attend. In addition to that, we also invite industry leaders
          to come and share their insights and ideas with our budding community.
          We also host an annual game-themed hackathon, called GameJam where participants
          try to make video games from scratch.</p>
        </div>
        <div id="wave">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z"></path>
          </svg>
        </div>
      </div>
    );
  }
}

export default Home;
