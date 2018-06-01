import React, { Component } from 'react';

import HeaderComponent from './header/header';
import FooterComponent from './footer/footer';
import HeroSection from './heroSection/heroSection';
import EventList from "./event/eventList";
import SubscribeForm from './subscribeForm/subscribeForm';

// import {events} from '../events';

class Home extends Component {

    constructor() {
		super();
		this.state = {
            events: []
        }
  }


  componentDidMount() {
		fetch('http://localhost:3001/allevents')
		.then(response=> response.json())
		.then(singleevent=> {this.setState({ events: singleevent})});
	}
    
  render() {

    const {events} = this.state;
    console.log(events);
      return (
      <div className="container">
        <HeaderComponent />
        <HeroSection />
        {/* {
            Object
            .keys(this.state.events)
            .map(key => <EventList key={key} index={key} details={this.state.events[key]} events={this.state.events} params={this.props.params} />)
        } */}
        <EventList events = {this.state.events}/>
        <SubscribeForm />
        <FooterComponent />
      </div>
    );
  }
}

export default Home;
