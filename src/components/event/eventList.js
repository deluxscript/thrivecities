import React, { Component } from 'react';
import SingleEventCard from "./singleEvent/singleEventCard";
import Sort from "./sort";
import './singleEvent/singleEvent.css';

class EventList extends Component {

  
  render() {
    const event = this.props.events;
    const eventCardComponent = event.map((user, i) => {
      return <SingleEventCard key={i} details={this.props.events[i]} event = {this.props.events} id={event[i].id} eventtitle={event[i].title} eventImg={event[i].imgurl} eventDesc={event[i].description} eventLoc={event[i].location} eventDate={event[i].eventdate} />
    })
    return (
      <div className="ph3 ph5-ns pt5 w-100 bigSection">
        {/* <div className="section mb4">
          <div className="headerbg">
            <p className="mb4 headerText f4 b">Popular <span className="eventColor">Events</span></p>
          </div>
          <SingleEventCard />
          <SingleEventCard />
          <SingleEventCard />
        </div> */}

         <div className="section mb4">
          <div className="headerbg">
            <p className="mb4 headerText f4 b">Upcoming <span className="eventColor">Events</span></p>
          </div>
          <Sort />
          
          {eventCardComponent}
        </div>
      </div>
    );
  }
}

export default EventList;
