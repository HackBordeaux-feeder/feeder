import React, { Component } from 'react'
import axios from 'axios'
// import cookies from 'js-cookie'
import CSSModules from 'react-css-modules';

import styles from './Settings.css'

class Settings extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleServiceChange = this.handleServiceChange.bind(this);
    this.state = {
      service: 'Facebook',
      option: ''
    }
  }

  handleServiceChange(event) {
    console.log(event.target.value)
    this.setState({service: event.target.value});
  }

  handleSubmit (e) {
    e.preventDefault()
    const data = {
      service: this.state.service,
      option: this.state.option
    }

    axios.post(`${process.env.API_URL || 'http://localhost:5000'}/subscribe`, data, { withCredentials: true })
    .then((response) => {
      // check if it has updated correctly?
      this.setState({option: ''})
    })
    .catch(() => {
      this.setState({
        error: 'Error logging in'
      })
    })
  }

  handleOptionChange(event) {
   this.setState({option: event.target.value});
 }

  renderOptions () {
    const service = this.state.service
    if (service === 'Facebook') {
      return (
        <div>
          <label htmlFor="settings__option" styleName="settings__label">Url of the person you want to follow</label>
          <input id="settings__option" value={this.state.option} styleName="settings__input" onChange={this.handleOptionChange}/>
          <input styleName="settings__submit" type="submit" value="Add Source" />
        </div>
      )
    } else if (service === "Twitter") {
      return (
        <div>
          <label htmlFor="settings__option" styleName="settings__label">Twitter username</label>
          <input id="settings__option" value={this.state.option} styleName="settings__input" onChange={this.handleOptionChange}/>
          <input styleName="settings__submit" type="submit" value="Add Source" />
        </div>
      )
    } else if (service === "Medium") {
      return (
        <div>
          <label htmlFor="settings__option" styleName="settings__label">Medium username</label>
          <input id="settings__option" value={this.state.option} styleName="settings__input" onChange={this.handleOptionChange}/>
          <input styleName="settings__submit" type="submit" value="Add Source" />
        </div>
      )
    }
  }

  render() {
    return (
      <div styleName="settings__container">
        <h1 styleName="settings__title">Add new feeds!</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="settings__source" styleName="settings__label">Select the source of the feed</label>
          <select styleName="source__select" id="settings__source" onChange={this.handleServiceChange}>
            <option value="Facebook">Facebook</option>
            <option value="Twitter">Twitter</option>
            <option value="Medium">Medium</option>
          </select>
          {this.renderOptions()}
        </form>
      </div>
    );
  }
}

export default CSSModules(Settings, styles, {allowMultiple:true});;
