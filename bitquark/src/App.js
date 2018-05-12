import React, { Component } from 'react';
import logo from './bitso_logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bitso Fron End Challenfe</h1>
        </header>
        <p className="App-intro">
          All the good shit will be shown here! \m/
        </p>
      </div>
    );
  }
}

export default App;
