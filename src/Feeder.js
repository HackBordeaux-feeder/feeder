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
        <TwitterView
          createdAt="Fri May 05 20:00:03 +0000 2017"
          name="Node.js"
          username="nodejs"
          // verified={true}
          text="✨ v7.10.0 of Node.js is out at https://t.co/q9wWuFYNdi with bug fixes, better WHATWG url compliance and crypto.randomFill{Sync}()"
          // retweets={41}
          // favourites={47}
          profileImage="http://pbs.twimg.com/profile_images/702185727262482432/n1JRsFeB_normal.png"
        />
        <MediumView
          title="Hello John"
          subtitle="Pepjo is a fucking fucker"
          // link=""
          pubDate="2 May"
          author="Dani Carmona"
          // image=""
        />
      </div>
    );
  }
}

export default Feeder;
