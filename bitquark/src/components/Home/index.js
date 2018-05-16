import React, { Component } from 'react';
import logo from '../../static/bitso_logo.svg';
import monkey from '../../static/space_monkey.jpg';
import './index.css';
import Nav from '../Navigation/index.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-title">Bitso Fron End Challenge <br/> by <br/> Luis Cervantes</p>
        </header>
        <p className="App-intro">
          <br/>
          The space monkey is working to put this shit in orbit soon.
          <br/>
          <img src={monkey} width="250"/>
        </p>
      </div>
    );
  }
}

export default App;
