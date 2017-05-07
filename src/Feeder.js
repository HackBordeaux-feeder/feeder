import React, { Component } from 'react';
import axios from 'axios';

import FacebookView from './js/FacebookView.js';
import TwitterView from './js/TwitterView.js';
import MediumView from './js/MediumView.js';

import './Feeder.css';

class Feeder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mediumFeed: [],
      twitterFeed: [],
      facebookFeed: [],
    }

    console.log('constructor')

    // axios.get(`${process.env.API_URL || 'http://localhost:5000'}/medium`)
    //   .then((response) => {
    //     this.setState({
    //       mediumFeed: response.data.map((el) => ( Object.assign({}, el, { provider: 'medium' }) ))
    //     })
    //   })
    //   .catch(() => {
    //     this.setState({
    //       error: 'Error getting medium'
    //     })
    //   })
    axios.get(`${process.env.API_URL || 'http://localhost:5000'}/twitter`)
      .then((response) => {
        console.log(response.data)
        this.setState({
          twitterFeed: response.data.map((el) => ( Object.assign({}, el, { provider: 'twitter' }) ))
        })
      })
      .catch(() => {
        this.setState({
          error: 'Error getting twitter'
        })
      })
    // axios.get(`${process.env.API_URL || 'http://localhost:5000'}/facebook`)
    //   .then((response) => {
    //     this.setState({
    //       facebookFeed: response.data.map((el) => ( Object.assign({}, el, { provider: 'facebook' }) ))
    //     })
    //   })
    //   .catch(() => {
    //     this.setState({
    //       error: 'Error getting facebook'
    //     })
    //   })


  }

  render() {
    return (
      <div className="feeder-grid">
        {[
          ...this.state.mediumFeed,
          ...this.state.twitterFeed,
          ...this.state.facebookFeed
        ]
        // .sort()
        .map((item) => {
          if (item.provider === 'facebook') {
            return (
              <FacebookView />
            )
          } else if (item.provider === 'medium') {
            return (
              <MediumView
                title="Hello John"
                subtitle="Pepjo is a fucking fucker"
                // link=""
                pubDate="2 May"
                author="Dani Carmona"
                // image=""
              />
            )
          } else if (item.provider === 'twitter') {
            return (
              <TwitterView
                createdAt={item.createdAt}
                name={item.name}
                username={item.username}
                // verified={item.verified}
                text={item.text}
                // retweets={item.retweets}
                // favourites={item.favourites}
                profileImage={item.profileImage}
              />
            )
          } else {
            console.log('null')
            return null
          }
        })}
      </div>
    );
  }
}

export default Feeder;
