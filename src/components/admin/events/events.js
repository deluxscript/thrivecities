import React, {Component} from 'react';
import ReactLoading from 'react-loading';

class Events extends Component {

	constructor(props) {
		super(props);
		this.state = {
            eventtitle: "",
            eventdate: "",
            eventlocation: "",
            eventimgurl: "",
            eventdescription: "",
			errorMsg: false,
			regLoading: false
		}
	}

	oneventtitleChange = (event) => {
		this.setState({eventtitle: event.target.value});
	}

	oneventdateChange = (event) => {
		this.setState({eventdate: event.target.value});
	}

	oneventlocationChange = (event) => {
		this.setState({eventlocation: event.target.value});
    }
    
    oneventurlChange = (event) => {
		this.setState({eventimgurl: event.target.value});
    }
    
    oneventdescriptionChange = (event) => {
		this.setState({eventdescription: event.target.value});
	}

	showError = (event) => {
		this.setState({errorMsg: true});
	}

	showregLoading = (event) => {
		this.setState({regLoading: true});
	}

	onRegister = () => {
		this.showregLoading();
		fetch('https://thriveapi.herokuapp.com/event', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
                title: this.state.eventtitle,
                eventdate: this.state.eventdate,
                location: this.state.eventlocation,
                imgurl: this.state.eventimgurl,
                description: this.state.eventdescription
			})
		})
		.then(response => response.json())
		.then(singleevent => {
			if (singleevent.title) {
                this.props.eventDetails(singleevent);
                alert('Event Submitted');
				// this.props.onRouteChange('home');
			}
			else {
				this.showError();
			}
		})
	}

	render() {

		const displayError = this.state.errorMsg ? {display: 'block'} : {display: 'none'};
		const showregloader = this.state.regLoading ? {display: 'block'} : {display: 'none'};

		return(
			<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw8 center">
				 <main className="pa4 black-80" style={{ background: 'deepskyblue'}}>
					<div className="measure center">
						   <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
									  <legend className="f2 fw6 ph0 mh0">Add Event</legend>
								   <div className="mt3">
									   <label className="db fw6 lh-copy f6" htmlFor="title">Event Title</label>
											 <input
											 className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
											 type="text"
											 name="title"
											 id="title"
											 onChange={this.oneventtitleChange}
											 />
								  </div>
								  <div className="mt3">
									   <label className="db fw6 lh-copy f6" htmlFor="date">Event Date</label>
											 <input
											 className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
											 type="text"
											 name="date"
											 id="date"
											 onChange={this.oneventdateChange}
											  />
								  </div>
								  <div className="mv3">
											 <label className="db fw6 lh-copy f6" htmlFor="loc">Event Location</label>
												 <input
												 className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
												 type="text"
												 name="loc"
												 id="loc"
												 onChange={this.oneventlocationChange}
												  />
								  </div>
                                  <div className="mv3">
											 <label className="db fw6 lh-copy f6" htmlFor="url">Image URL</label>
												 <input
												 className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
												 type="text"
												 name="url"
												 id="url"
												 onChange={this.oneventurlChange}
												  />
								  </div>
                                  <div className="mv3">
											 <label className="db fw6 lh-copy f6" htmlFor="desc">Event Description</label>
												 <input
												 className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
												 type="text"
												 name="desc"
												 id="desc"
												 onChange={this.oneventdescriptionChange}
												  />
								  </div>
							</fieldset>
							<div className="">
									  <input
									  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
									  type="submit"
									  value="Register"
									  onClick = {this.onRegister}
									  />
									  <div style = {showregloader}>
									  	<ReactLoading type="bars" color="#fff"/>
									  </div>
										<p style = {displayError}>All fields are required</p>
							</div>
					</div>
				 </main>
			</article>
		);

	}
} 

export default Events;
