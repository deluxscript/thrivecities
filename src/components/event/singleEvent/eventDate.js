import React from 'react';

const EventDate = ({eventDate}) => {
  
  return (
    <div className="eventdate tc h-120">
      <span className="block f3 ttu pa3">{eventDate}</span>
    </div>
  );
}

export default EventDate;
