import React, { Component } from 'react';
import './index.css';
import monkey from '../../static/space_monkey.jpg';


class MarketView extends Component {
  render() {
    return (
      <div className="App">
        <p className="text">
        The space monkey is working to put this shit in orbit soon.
        </p>
        <br/>
        <img src={monkey} width="300"/>
      </div>
    );
  }
}

export default MarketView;
