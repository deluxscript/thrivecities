import React, { Component } from 'react';

import Modal from 'react-responsive-modal';
import { Icon } from 'react-icons-kit';
import {ic_place} from 'react-icons-kit/md/ic_place';
import {ic_date_range} from 'react-icons-kit/md/ic_date_range'
import SubscribeForm from '../../subscribeForm/subscribeForm';

import EventDate from './eventDate';
import EventDescription from './eventDescription';
import EventLocation from './eventLocation';
import EventTitle from './eventTitle';
import EventImage from './eventImage';
// import ReadMoreLink from './readMoreLink';

import './singleEvent.css';


class SingleEventCard extends Component {

    constructor(props) {
          super(props);
          this.state = {
              open: false
          }
      }
  
      onOpenModal = () => {
          this.setState({ open: true });
        };
      
        onCloseModal = () => {
          this.setState({ open: false });
        };
        render(){
    const {id, eventtitle, eventImg, eventDesc, eventLoc, eventDate} = this.props;
    const { open } = this.state;
        return (
            <div className="eventCard fl">
              <div className="flex">
                  <div className="w-30">
                      <EventDate eventDate = {eventDate} />
                  </div>
                  <div className="w-70 ml2">
                      <EventImage eventImg={eventImg}/>
                  </div>
              </div>
              <div className="borderLine">
                  <div>
                      <EventTitle eventtitle={eventtitle}/>
                  </div>
                  <div className="desc">
                      <EventDescription eventDesc={eventDesc} />
                      
                      <p className="readmore f6">
                        <a onClick={this.onOpenModal}>Click to RSVP></a>
                        <Modal 
                        open={open} 
                        onClose={this.onCloseModal} 
                        center
                        classNames={{
                            transitionEnter: 'transition-enter',
                            transitionEnterActive: 'transition-enter-active',
                            transitionExit: 'transition-exit-active',
                            transitionExitActive: 'transition-exit-active',
                        }}
                        animationDuration={1000}
                        >
                        <div ref={id} className="task-edit" key={id}>
                        <div className="tc">
                            <img src={eventImg} width="430"  alt="eventImage" />
                            <p className="fullTitle f3 mb3 mt3">{eventtitle}</p>
                        </div>
                            <div className="flex mt3 mb3 jc">
                            <p className="fullDate"><Icon icon={ic_date_range}/> {eventDate}</p>
                            <p className="fullLcn"><Icon icon={ic_place}/> {eventLoc}</p>
                            </div>
                        <div className="mt4 mb4">
                            <p className="f4 desc">Event Description</p>
                            <p className="fulldesc mt3 f5">
                            {eventDesc}
                            </p>
                        </div>
                        <div>
                            <SubscribeForm />
                        </div>
                        </div>
                        
                        </Modal>
                    </p>

                  </div>
                  <EventLocation eventLoc={eventLoc} />
              </div>
            </div>
          );
    }

}

export default SingleEventCard;
