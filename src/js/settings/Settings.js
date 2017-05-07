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
    this.state = {
      service: 'Facebook',
      option: ''
    }
  }

  handleOptionChange(event) {
    console.log(event.target.value)
    this.setState({service: event.target.value});
  }

  handleSubmit (e) {
    e.preventDefault()
    const data = {
      service: this.state.service,
      option: this.state.option
    }

    axios.post(`${process.env.API_URL || 'http://localhost:5000'}/subscribe`, data)
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

  renderOptions () {
    const service = this.state.service
    if (service === 'Facebook') {
      return (
        <div>
          <label style={{color: 'black'}} htmlFor="facebook__user" styleName="settings__label">Facebook Credentials</label><br/>
          <input placeholder="Your user" id="facebook__user" styleName="settings__input"/>
          <input placeholder="Your password" id="facebook_password" type='password' styleName="settings__input"/><br/>
          <label htmlFor="settings__option" styleName="settings__label">Url of the person/group/page you want to follow</label>
          {this.props.user.options.filter((a) => {
            return (a.sources === 'facebook')
          }).map((a) => {
            return (<input id="settings__option" value={a.source} ref={(ref) => this.username = ref} styleName="settings__input"/>)
          })}
          <input styleName="settings__submit" type="submit" value="Save" />
        </div>
      )
    } else if (service === "Twitter") {
      return (
        <div>
          <label htmlFor="settings__option" styleName="settings__label">Twitter username</label>
          {this.props.user.options.filter((a) => {
            return (a.sources === 'twitter')
          }).map((a) => {
            return ( <input id="settings__option" value={a.source} ref={(ref) => this.username = ref} styleName="settings__input"/>)
          })}
          <input styleName="settings__submit" type="submit" value="Save" />
        </div>
      )
    } else if (service === "Medium") {
      return (
        <div>
          <label htmlFor="settings__option" styleName="settings__label">Medium username</label>
          {this.props.user.options.filter((a) => {
            return (a.sources === 'medium')
          }).map((a) => {
            return (<input id="settings__option" value={a.source} ref={(ref) => this.username = ref} styleName="settings__input"/>)
          })}
          <input styleName="settings__submit" type="submit" value="Save" />
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
          <select styleName="source__select" id="settings__source" onChange={this.handleOptionChange}>
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
