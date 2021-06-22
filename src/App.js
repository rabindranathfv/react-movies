import React, { Component } from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.css';

import { Details } from './pages/Details';
import { Home } from './pages/Home';

class App extends Component {
  
 render() {
   return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/detail/:id' component={Details} />
      </Switch>
    </div>
   );
 }
}

export default App;
