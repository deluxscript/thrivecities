import React, { Component } from 'react';

import Account from './account';
import SignIn from './signin/signin';
import Register from './register/register';
import Events from './events/events';
import './admin.css';


const initialstate = {
	input: '',
	open: false,
	imageUrl: '',
	box: {},
	Demo: {},
	route: 'SignIn',
	isSignedIn: false,
	user: {
		id: '',
		name: '',
		email: '',
		entries: 0,
		joined: ''
	},
	singleevent: {
		title: '',
		eventdate: '',
		location: '',
		imgurl: '',
		description: ''
	}
}

class Admin extends Component {

	constructor() {
		super();
		this.state = initialstate;
	}

	userDetails = (data) => {
		this.setState({
			user: {
				id: data.id,
				name: data.name,
				email: data.email,
				entries: data.entries,
				joined: data.joined
			}
		});

	}

	eventDetails = (data) => {
		this.setState({
			singleevent: {
				title: data.title,
				eventdate: data.date,
				location: data.location,
				imgurl: data.imgurl,
				description: data.description
			}
		});

	}

	onInputChange = (event) => {
		this.setState({input: event.target.value});
	}

	onRouteChange = (route) => {
		if (route === 'SignOut') {
			this.setState(initialstate);
		}
		else if (route === 'home') {
			this.setState({isSignedIn: true});
		}
		this.setState({route: route});
	}

	render() {
		const { isSignedIn, route, } = this.state;
		return (
			<div className="App">
				<Account isSignedIn = {isSignedIn} onRouteChange = {this.onRouteChange} />
				{	route === 'home' ?
					<div>
						<Events eventDetails = {this.eventDetails}/>
						
					</div>
					:
					(
						route === 'SignIn' ?
						<SignIn  onRouteChange = {this.onRouteChange} userDetails = {this.userDetails}/>
						:
						<Register  onRouteChange = {this.onRouteChange} userDetails = {this.userDetails}/>
					)
					
				}
			</div>
		);
	}
}

export default Admin;
