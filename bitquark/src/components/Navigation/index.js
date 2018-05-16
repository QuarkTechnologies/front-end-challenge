import React, { Component } from 'react';
//import logo from './bitso_logo.svg';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

import './index.css';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li><Link to={routes.HOME}>Home</Link></li>
          <li><Link to={routes.MARKETSVIEW}>Markets View</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
