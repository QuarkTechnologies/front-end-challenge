import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import HomePage from '../Home';
import MarketView from '../MarketView';
import * as routes from '../../constants/routes';

import './index.css';

const App = () =>
  <Router>
    <div className="app">
      <Navigation/>
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.MARKETSVIEW} component={() => <MarketView />} />
    </div>
  </Router>

export default App;
