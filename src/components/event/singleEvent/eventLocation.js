import React from 'react';
import { Icon } from 'react-icons-kit';
import {ic_place} from 'react-icons-kit/md/ic_place';

const EventLocation = ({eventLoc}) => {
  return (
    <div className="eventlocation f7">
        <Icon icon={ic_place}/> {eventLoc}
    </div>
  );
}

export default EventLocation;
