import React, { Component } from 'react';
import Logo from './logo';
import Search from './search';
import './header.css';

class HeaderComponent extends Component {
  render() {
    return (
      <div className="header w-100 pa3">
        <div className="logo">
            <Logo />
            <div className="pt4 brandName f3 b">
                Thriving Cities
            </div>
        </div>
        <div>
            <Search />
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
