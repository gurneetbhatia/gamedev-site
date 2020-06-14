import React, { Component } from 'react';
import EventCard from '../components/EventCard';
import './Events.css';

/* let events be an array of JSON objects that contains information in the following format about all
past and upcoming events:
eventObject = {
  title: "Title of the event",
  datetime: new Date(dt),
  location: "The location of the event with possibly a google maps link",
  url: "Optional URL that takes you to the event facebook/eventbrite page",
}

note that date objects are made in the following format:
new Date(year, month, date, hour, minute)
the 'month' value is 0-indexed
*/
let events = [
  {
    title: "Event1",
    datetime: new Date(),
    location: "Kilburn",
    url: "https://facebook.com"
  },
  {
    title: "Event2",
    datetime: new Date(2020, 0, 23, 12, 0),
    location: "Kilburn",
    url: "https://facebook.com"
  },
  {
    title: "Event3",
    datetime: new Date(2020, 3, 23, 12, 0),
    location: "Kilburn",
    url: "https://facebook.com"
  },
  {
    title: "Event4",
    datetime: new Date(2020, 6, 23, 12, 0),
    location: "Kilburn",
    url: "https://facebook.com"
  }
];

const getUpcomingEvents = (events) => {
  let today = new Date();
  var upcoming = [];
  var past = []
  events.forEach((event) => {
    if(event.datetime >= today) {
      upcoming.push(event);
    } else {
      past.push(event);
    }
  });
  return {"upcoming": upcoming, "past": past};
}

class EventCards extends Component {
  render() {
    let events = this.props.events;

    return (
      <div>
      {
        events.map((event, i) => {
          return <EventCard key={i} event={event}></EventCard>
        })
      }
    </div>
    );
  }
}

class Events extends Component {
  render() {
    let e = getUpcomingEvents(events);
    let upcoming = e.upcoming;
    let past = e.past;
    return(
      <div align="center" className="events">
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
        <div className="container row">
          <section align="center" id="upcoming-events" className="col-md events-section">
            <h2>Upcoming Events</h2>
            <EventCards events={upcoming}></EventCards>
          </section>
          <section align="center" id="past-events" className="col-md events-section">
            <h2>Past Events</h2>
            <EventCards events={past}></EventCards>
          </section>
        </div>
      </div>
    );
  }
}

export default Events;
