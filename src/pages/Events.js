import React, { Component } from 'react';
import './Events.css';

class Events extends Component {
  render() {
    return(
      <div className="events">
          <div className="box">
            <img id="events-img" src={require('../Assets/events_top.jpg')} alt="Image of a workshop event"/>
            <div className="transparent-layer"></div>
            <div className="container img-text">
                <h1>Events</h1>
                <p>Our events are open to anyone with an interest in game development.
                In the past, they have included talks from professionals in the industry,
                Unity workshops, and our very own hackathon!</p>
            </div>
        </div>
      </div>
    );
  }
}

export default Events;
