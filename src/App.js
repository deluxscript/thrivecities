import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Admin from "./components/admin/admin";
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path='/admin'
          component={Admin} />}
        />
    </Switch>
    );
  }
}

export default App;
