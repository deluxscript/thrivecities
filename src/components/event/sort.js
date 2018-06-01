import React, { Component } from 'react';

class Sort extends Component {
  render() {
    return (
        <div className="mb3" style={{cursor: "pointer"}}>
            Sort By:
            <span className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib black ml2">Alphabetical Order</span>
            <span className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib black ml2">Date</span>
	    </div>
    );
  }
}

export default Sort;
