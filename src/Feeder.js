import React, { Component } from 'react';

import FacebookView from './js/FacebookView.js';
import TwitterView from './js/TwitterView.js';
import MediumView from './js/MediumView.js';

import './Feeder.css';

class Feeder extends Component {
  render() {
    return (
      <div className="feeder-grid">
        <FacebookView />
        <TwitterView />
        <MediumView />
      </div>
    );
  }
}

export default Feeder;
