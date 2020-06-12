import React, { Component } from 'react';
import './EventCard.css';

const EventCard = (props) => {
  let title = props.event.title;
  let datetime = props.event.datetime;
  let location = props.event.location;
  let url = props.event.url;

  let date = datetime.toDateString().split(' ').slice(1, 3).join(' ');
  let time = datetime.toTimeString().split(':').slice(0, 2).join(':');

  return (
    <a className="event-url" href={url}>
      <div className="event-card">
        <div align="center" className="event-date">
          <p className="mb-0"><i className="fa fa-calendar mr-2"></i><br></br>{date}</p>
        </div>
        <div className="event-title">
          <h4>{title}</h4>
          <p className="mb-0"><i className="fa fa-clock-o mr-2"></i>{time}</p>
          <p className="mb-0"><i className="fa fa-map-marker mr-2"></i>{location}</p>
        </div>
      </div>
    </a>
  );
}

export default EventCard;
