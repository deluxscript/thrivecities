import React, { Component } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import CustomForm from './customform';
import './subscribeForm.css';


class SubscribeForm extends Component {

    constructor(props) {
		super(props);
		this.state = {
			form: false
		}
    }
    
    showForm = (event) => {
        this.setState({form: true});
	}

    onSubmitClick = () => {
        this.showForm();
    }
    
  render() {
    const displayForm = this.state.form ? {display: 'block'} : {display: 'none'};
    const url = "https://sachagreif.us2.list-manage.com/subscribe/post?u=b5af47765edbd2fc173dbf27a&id=d8282e7e96";
    return (
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              displayForm={displayForm}
              onSubmitClick = {this.onSubmitClick}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
    );
  }
}

export default SubscribeForm;
