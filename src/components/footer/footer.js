import React, { Component } from 'react';

import { Icon } from 'react-icons-kit';
import {facebook} from 'react-icons-kit/fa/facebook';
import {twitter} from 'react-icons-kit/fa/twitter';
import './footer.css';

class FooterComponent extends Component {
  render() {
    return (
        <div className="ph5-ns ph5 w-100 footer">
            <section className="footer-social-section flex-rw">
      <span className="footer-social-overlap footer-social-connect f2">
      CONNECT <span className="footer-social-small">with</span> US
      </span>
      <span className="footer-social-overlap footer-social-icons-wrapper">
      <a href="" className="generic-anchor" rel="noopener noreferrer" target="_blank" title="Facebook"><Icon size={32} icon={facebook}/></a>
      <a href="" className="generic-anchor" rel="noopener noreferrer" target="_blank" title="Twitter"><Icon size={32} icon={twitter}/></a>
      </span>
  </section>
  <section className="footer-bottom-section flex-rw">
<div className="footer-bottom-wrapper">   
<i className="fa fa-copyright">
 
</i> 2015 Pavilion in <address className="footer-address">Bergen, NY</address><span className="footer-bottom-rights"> - All Rights Reserved - </span>
    </div>
    <div className="footer-bottom-wrapper">
    <a href="#d" className="generic-anchor" rel="nofollow">Terms</a> | <a href="" className="generic-anchor" rel="nofollow">Privacy</a>
      </div>
  </section>
            
	    </div>
    );
  }
}

export default FooterComponent;
