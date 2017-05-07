import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import FacebookView from './js/FacebookView.js';
import TwitterView from './js/TwitterView.js';
import MediumView from './js/MediumView.js';

import CSSModules from 'react-css-modules';
import styles from './Feeder.css';

function getRandomID () {
  return `${performance.now()}-${parseInt(Math.random() * 10000000, 10)}`
}

class Feeder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mediumFeed: [],
      twitterFeed: [],
      facebookFeed: [],
    }

    axios.get(`${process.env.API_URL || 'http://localhost:5000'}/medium`, { withCredentials: true })
      .then((response) => {
        this.setState({
          mediumFeed: response.data.map((el) => {
            el.provider ='medium'
            el.key = getRandomID()
            el.date = moment(el.pubDate)
            return el
          })
        })
      })
      .catch(() => {
        this.setState({
          error: 'Error getting medium'
        })
      })
    axios.get(`${process.env.API_URL || 'http://localhost:5000'}/twitter`, { withCredentials: true })
      .then((response) => {
        this.setState({
          twitterFeed: response.data.map((el) => {
            el.provider ='twitter'
            el.key = getRandomID()
            el.date = moment(el.createdAt)
            return el
          })
        })
      })
      .catch(() => {
        this.setState({
          error: 'Error getting twitter'
        })
      })
    axios.get(`${process.env.API_URL || 'http://localhost:5000'}/facebook`, { withCredentials: true })
      .then((response) => {
        this.setState({
          facebookFeed: response.data.map((el) => {
            el.provider ='facebook'
            el.key = getRandomID()
            // el.date = moment(el.createdAt)
            return el
          })
        })
      })
      .catch(() => {
        this.setState({
          error: 'Error getting facebook'
        })
      })


  }

  render() {
    console.log(moment("Sat, 06 May 2017 06:31:02 GMT"))
    // console.log([
    //   ...this.state.mediumFeed,
    //   ...this.state.twitterFeed,
    //   ...this.state.facebookFeed
    // ])
    return (
      <div className="feeder-grid">
        {[
          ...this.state.mediumFeed,
          ...this.state.twitterFeed,
          ...this.state.facebookFeed
        ]
        .sort(function(a, b) {
          if (a.date.isAfter(b.date)) {
            return 1;
          } else if (a.date.isBefore(b.date)) {
            return -1;
          } else {
            return 0;
          }
        })
        .map((item) => {
          if (item.provider === 'facebook') {
            return (
              <FacebookView key={item.key}/>
            )
          } else if (item.provider === 'medium') {
            return (
              <MediumView
                key={item.key}
                title={item.title}
                subtitle={item.subtitle}
                link={item.link}
                pubDate={item.pubDate}
                author={item.author}
                image={item.image}
              />
            )
          } else if (item.provider === 'twitter') {
            return (
              <TwitterView
                key={item.key}
                profileLink={"https://twitter.com/" + item.username}
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

export default CSSModules(Feeder, styles, {allowMultiple:true});
